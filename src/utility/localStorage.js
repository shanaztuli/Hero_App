//get
export const loadInstalledApp = () => {
  try {
    const data = localStorage.getItem("installed");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};
// save

// export const updateList = (card) => {
//   const installed = loadInstalledApp();

//   try {
//     const isDuplicate = installed.some((p) => p.id === card.id);
//     if (isDuplicate) return alert("Already Installed");
// else if (!isDuplicate) {
//     installed.push(card);
//     localStorage.setItem("installed", JSON.stringify(installed));
//   }
//   const updatedInstalled = [...installed, card];
//   localStorage.setItem("installed", JSON.stringify(updatedInstalled));
// } catch (err) {
//   console.log(err);
// }
// };
// save
export const updateList = (card) => {
  const installed = loadInstalledApp();
  const isDuplicate = installed.some((p) => p.id === card.id);
  if (!isDuplicate) {
    installed.push(card);
    localStorage.setItem("installed", JSON.stringify(installed));
  }
};
//delete

export const removeFromLandUI = (id) => {
  const installed = loadInstalledApp();
  try {
    const updatedInstalled = installed.filter((c) => c.id !== id);
    localStorage.setItem("installed", JSON.stringify(updatedInstalled));
  } catch (err) {
    console.log(err);
  }
};
