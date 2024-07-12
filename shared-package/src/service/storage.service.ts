import {useStorage} from '@vueuse/core';

interface DummyStorageState {
	data: string[];
}

export const dummyStorage = useStorage<DummyStorageState>('dummy', {
	data: ['dummy', 'data']
});

export const getDataFromStorage = () => {
	return dummyStorage.value.data;
}
