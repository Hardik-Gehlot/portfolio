import { ref, child, get } from "firebase/database";
import startFirebase from "./firebase";
const fetchHome = async() => {
    const db = startFirebase();
    const dbRef = ref(db);
    let data = null;
    await get(child(dbRef, `home`)).then((snapshot) => {
        if (snapshot.exists()) {
            data = snapshot.val();
        }
      }).catch((error) => {
        console.error(error);
      });
    return data;
}
const fetchAboutMe = async() => {
    const db = startFirebase();
    const dbRef = ref(db);
    let data = null;
    await get(child(dbRef, `aboutme`)).then((snapshot) => {
        if (snapshot.exists()) {
            data = snapshot.val();
        }
      }).catch((error) => {
        console.error(error);
      });
    return data;
}
const fetchEducation = async() => {
  const db = startFirebase();
  const dbRef = ref(db);
  let data = null;
  await get(child(dbRef, `education`)).then((snapshot) => {
      if (snapshot.exists()) {
          data = snapshot.val();
      }
    }).catch((error) => {
      console.error(error);
    });
  return data;
}
const fetchSkills = async() => {
  const db = startFirebase();
  const dbRef = ref(db);
  let data = null;
  await get(child(dbRef, `skills`)).then((snapshot) => {
      if (snapshot.exists()) {
          data = snapshot.val();
      }
    }).catch((error) => {
      console.error(error);
    });
  return data;
}
const fetchProjects = async() => {
  const db = startFirebase();
  const dbRef = ref(db);
  let data = null;
  await get(child(dbRef, `projects`)).then((snapshot) => {
      if (snapshot.exists()) {
          data = snapshot.val();
      }
    }).catch((error) => {
      console.error(error);
    });
  return data;
}
const fetchAchievements = async() => {
  const db = startFirebase();
  const dbRef = ref(db);
  let data = null;
  await get(child(dbRef, `achievments`)).then((snapshot) => {
      if (snapshot.exists()) {
          data = snapshot.val();
      }
    }).catch((error) => {
      console.error(error);
    });
  return data;
}
const fetchResume = async() => {
  const db = startFirebase();
  const dbRef = ref(db);
  let data = null;
  await get(child(dbRef, `resume`)).then((snapshot) => {
      if (snapshot.exists()) {
          data = snapshot.val();
      }
    }).catch((error) => {
      console.error(error);
    });
  return data;
}
export {fetchHome,fetchAboutMe,fetchEducation,fetchSkills,fetchProjects,fetchAchievements,fetchResume};