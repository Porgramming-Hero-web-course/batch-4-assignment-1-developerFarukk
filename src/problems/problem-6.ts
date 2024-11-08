
{
    // ******  <  Problem 6  >  *********

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
        return { ...profile, ...updates };
    }


    const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };
    
    const updatedProfile = updateProfile(myProfile, { age: 26 });
    // const updatedProfile = updateProfile(myProfile, { name: "fff" });

    // console.log(updatedProfile);

    // 
}