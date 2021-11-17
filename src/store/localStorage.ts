import { typeFiltering } from 'types/filtering';

export const loadState: (name: string) => typeFiltering = (name) => {
  try {
    const serializedState = localStorage.getItem(name);

    return serializedState ? JSON.parse(serializedState) : {};
  } catch (err) {
    return {};
  }
};

export const saveState = (state: typeFiltering, name: string) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(name, serializedState);
  } catch {
    // ignore write errors
  }
};

export const loadStateIsCatalogPopupShown = () => {
  try {
    const serializedState = localStorage.getItem('isCatalogPopupShown');

    return serializedState ? JSON.parse(serializedState) : false;
  } catch (err) {
    return false;
  }
};

export const saveStateIsCatalogPopupShown = (state: boolean) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('isCatalogPopupShown', serializedState);
  } catch {
    // ignore write errors
  }
};

export const removeState = (name: string) => {
  localStorage.removeItem(name);
};
