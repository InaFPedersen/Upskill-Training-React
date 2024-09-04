'use server';

import { revalidatePath } from 'next/cache';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';

export async function updateProfile(formData) {
  const session = await auth();

  if (!session)
    throw new Error('You need to be logged in to update your profile');

  const nationalID = formData.get('nationalID');
  const [nationality, countryFlag] = formData.get('nationality').split('%');

  if (!/^[a-zA-Z0-9]{6, 12}$/.test(nationalID)) {
    throw new Error('Invalid national ID');
  }

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from('guests')
    .update(updatedData)
    .eq('id', session.user.guestId);

  if (error) {
    console.error(error);
    throw new Error('Guest could not be updated');
  }

  revalidatePath('/account/profile');
}

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}
