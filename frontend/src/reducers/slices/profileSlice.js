import {createSlice} from "@reduxjs/toolkit"
// Helper function to safely parse JSON from localStorage
const getUserFromLocalStorage = () => {
        const user = localStorage.getItem("user");
        if (user) {
          try {
            return JSON.parse(user);
          } catch (error) {
            console.error("Error parsing user data from localStorage", error);
            return null;
          }
        }
        return null;
      };
const initialState = {

        user: getUserFromLocalStorage(),
    loading: false,
};

const profileSlice = createSlice({
    name:"profile",
    initialState: initialState,
    reducers: {
        setUser(state, value) {
            state.user = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
          },
    },
});

export const {setUser, setLoading} = profileSlice.actions;
export default profileSlice.reducer;