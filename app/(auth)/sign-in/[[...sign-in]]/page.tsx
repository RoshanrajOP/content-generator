import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn afterSignInUrl="/dashboard" />  {/* Add this prop to redirect after sign-in */}
    </div>
  );
}
