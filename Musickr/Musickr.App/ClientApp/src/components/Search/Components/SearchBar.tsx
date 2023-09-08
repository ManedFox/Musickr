import React, {
  ChangeEvent, 
  useState
} from "react"

import {HStack, Icon, Text} from "@chakra-ui/react";
import {MdPlace} from "react-icons/md";
import {
  AutoComplete, 
  AutoCompleteInput, 
  AutoCompleteItem, 
  AutoCompleteList
} from "@choc-ui/chakra-autocomplete";

import {useDebounce} from "react-use";
import {useTranslation} from "react-i18next";

import useGetSearch from "../../Utils/Hooks/useGetSearch";

type SearchBarProps = {
  defaultValue?: string;
  onChange: (value: string) => void;  
};

const SearchBar = ({ 
  onChange,
  defaultValue = ""
} : SearchBarProps) => {
  const { t } = useTranslation();
  
  const [searchContent, setSearchContent] = useState(defaultValue);
  const [searchContentDebounced, setSearchContentDebounced] = useState("");
  
  const handleInput = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    setSearchContent(changeEvent.target.value);
  };

  const [, cancel] = useDebounce(
    () => {
      setSearchContentDebounced(searchContent);
    },
    500,
    [searchContent]
  );
  
  const { isLoading, data } = useGetSearch(searchContentDebounced);
  
  return (
    <AutoComplete 
      openOnFocus 
      emptyState={(
        <Text 
          fontWeight="bold" 
          p="4"
        >
          {t("searchPage.searchBar.emptyState")}
        </Text>
      )}
      isLoading={isLoading}
      onChange={onChange}
    >
      <AutoCompleteInput 
        variant="filled"
        h="12"
        w="lg"
        placeholder={t("searchPage.searchBar.placeholder")}
        value={searchContent}
        onChange={handleInput}
      />
      <AutoCompleteList>
        {data?.map((place) => (
          <AutoCompleteItem
            key={place.name}
            value={place.name}
          >
            <HStack justifyContent="center">
              <Icon as={MdPlace} />
              <Text 
                fontSize="lg" 
                m="0"
              >
                {place.name}
              </Text>
            </HStack>
          </AutoCompleteItem>
        ))}
      </AutoCompleteList>
    </AutoComplete>
  )
};

export default React.memo(SearchBar);