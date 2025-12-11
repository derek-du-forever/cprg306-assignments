'use client';
import { useUserAuth } from './_utils/auth-context';

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">
                Week 9: Firebase Authentication
            </h1>
            {user ? (
                <div>
                    <p className="mb-4">
                        Signed in as: {user.displayName} ({user.email})
                    </p>
                    <div className="mb-4">
                        <a href="/week-9/shopping-list">Shopping List</a>
                    </div>
                    <button
                        onClick={firebaseSignOut}
                        className="p-2 bg-red-500 text-white rounded"
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <button
                    onClick={gitHubSignIn}
                    className="p-2 bg-blue-500 text-white rounded"
                >
                    Sign In with GitHub
                </button>
            )}
        </div>
    );
}
