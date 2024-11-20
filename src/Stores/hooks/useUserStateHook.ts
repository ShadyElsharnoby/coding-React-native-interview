import { useShallow } from 'zustand/react/shallow';
import { UserSliceI } from '../Slices/UserSlice';
import { useUserStore } from '../Stores/UserStore';

const useUserStateHook = <T>(selector: (state: UserSliceI) => T): T => {
    return useUserStore(useShallow((state: UserSliceI) => selector(state)));
};

export default useUserStateHook;
