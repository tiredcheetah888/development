import Nav from 'react-bootstrap/Nav';
import './NavFilter.css';

export default function NavFilter({selectVibeFilter, selectGenreFilter, sorter}){
    return(

    <div class="nav-filter">
            <div>
          <h3> Filter by Vibe: </h3>
                  <form>
                    <select name="vibeSelect" onChange={selectVibeFilter}> 
                      <option value="all"> all vibes </option>
                      <option value="calm"> calm </option>
                      <option value="upbeat"> upbeat</option>
                    </select>
                  </form>
                </div>
                <div>
          <h3> Filter by Genre: </h3>
                  <form>
                    <select name="genreSelect" onChange={selectGenreFilter}> 
                      <option value="all"> all genres </option>
                      <option value="R&B"> R&B </option>
                      <option value="Rap"> Rap</option>
                    </select>
                  </form>
                </div>
        <div>
            <h3> Sort by Song Length: </h3>
                <form>
                    <Nav.Item> <input type='radio' name='sortType' id="length" value='shortToLong' onChange={sorter} />
                    <label for="sort"> longest to shortest</label> </Nav.Item>

                    <Nav.Item> <input type='radio' name='sortType' id="length" value='longToShort' onChange={sorter}/>
                    <label for="sort"> shortest to longest</label> </Nav.Item>
                </form>
                </div>
    
          </div>
    );
}