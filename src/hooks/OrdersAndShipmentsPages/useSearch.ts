import { useState, useEffect } from 'react';
import useScreen from 'hooks/useScreen';

import { typeFiltering } from 'types/filtering';

const useSearch = (
  filtering: typeFiltering,
  searchValue: string,
  setSearchValue: (val: string) => void,
  longNamePreloader?: string,
) => {
  const name = longNamePreloader || 'Поиск';

  const { isMobile } = useScreen();
  const [isFocus, setFocusInput] = useState(false);
  const [placeholderInput, setPlaceholderInput] = useState(name);

  useEffect(() => {
    setPlaceholderInput(isMobile ? 'Поиск' : name);
    if (Boolean(!searchValue)) {
      setSearchValue('');
    }
    if (searchValue) {
      setFocusInput(true);
    }
  }, [isMobile, filtering]);

  return {
    searchValue,
    isFocus,
    placeholderInput,
    isMobile,
    setSearchValue,
    setFocusInput,
  };
};

export default useSearch;
