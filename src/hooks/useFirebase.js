import { useState } from "react";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    // GithubAuthProvider,
    // TwitterAuthProvider,
    // FacebookAuthProvider,
} from "firebase/auth";
import { useEffect } from "react";
import initializeConfigue from "@/firebase/firebase.init";

initializeConfigue();
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();
    // const twitterProvider = new TwitterAuthProvider();
    // const facebookProvider = new FacebookAuthProvider();

    const [user, setUser] = useState({});
    // const [userData, setUserData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [userDetail, setUserDetail] = useState();

    const signUpWithEmailAndPassword = async (name,email, password) => {
         await createUserWithEmailAndPassword(auth, email, password);
         updateName(name)
        return
         

    };

    const signInWithEmail = async (email, password) => {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);

                console.log(result.user);
                
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const signInWithGoogle = async (location) => {
        await signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setLoading(false);
                                
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // const signInWithGithub = (location) => {
    //     return signInWithPopup(auth, githubProvider)
    //         .then((result) => {
    //             setUser(result.user);
    //             setLoading(false)
    //             if (location?.state?.from) {
    //                 return navigate(location?.state?.from);
    //             } else {

    //                 return navigate("/home");
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    // const signInWithTwitter = (location) => {
    //     return signInWithPopup(auth, twitterProvider)
    //         .then((result) => {
    //             setUser(result.user);
    //             setLoading(false)
    //             if (location?.state?.from) {
    //                 return navigate(location?.state?.from);
    //             } else {

    //                 return navigate("/home");
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    // const signInWithFacebook = (location) => {
    //     return signInWithPopup(auth, facebookProvider)
    //     .then((result) => {
    //         setUser(result.user);
    //         setLoading(false)
    //         if (location?.state?.from) {
    //             return navigate(location?.state?.from);
    //         } else {

    //             return navigate("/home");
    //         }
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };

    const logOut = () => {
        return signOut(auth);
    };

    // update user

    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {
                // Profile updated!
                // ...
            })
            .catch((error) => {
                // An error occurred
                // ...
                console.log(error);
            });
    };

    // observer

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(true);
            if (user) {
                setUser(user);
                setLoading(false);
                // console.log(user);
                
            } else {
                setUser({});
                setLoading(false);
            }
        });
        return () => unsubscribe;
    }, [auth]);

    // console.log(userDetail);

    return {
        signUpWithEmailAndPassword,
        signInWithEmail,
        signInWithGoogle,
        // signInWithGithub,
        // signInWithTwitter,
        // signInWithFacebook,
        logOut,
        user,
        setUser,
        dataLoading: loading,
        setLoading,
        error,
        updateName,
        userDetail,
        setError,
    };
};

export default useFirebase;