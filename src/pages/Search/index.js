import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SearchIcon from "assets/icons/search.svg";
import TracksTable from "components/TracksTable";
import Input from "components/UI/Input";
import { loadSearch } from "services/api";
import { InputWrapper, NotFoundText, TableTitle, Wrapper } from "./styled";

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // TODO: Add debounce
      try {
        setIsLoading(true);
        const data = await loadSearch(searchQuery);
        setTracks(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) fetchData();
  }, [searchQuery]);

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          startIcon={SearchIcon}
        />
      </InputWrapper>
      {searchQuery && (
        <div>
          <TableTitle>Search results for {searchQuery}</TableTitle>
          {(isLoading || (!isLoading && tracks?.length > 0)) && (
            <TracksTable isLoading={isLoading} tracks={tracks} />
          )}
        </div>
      )}
      {searchQuery && !isLoading && tracks?.length <= 0 && (
        <NotFoundText>No tracks found for {searchQuery}</NotFoundText>
      )}
    </Wrapper>
  );
}

export default Search;
