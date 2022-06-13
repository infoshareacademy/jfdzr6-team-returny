import "./CamperCard.css";
export function FindCmpr({ getCamperType }) {
    function handleSelectType(e) {
      e.preventDefault();
      getCamperType(e.target.value);
    }
  
    return (
      <div classNAme="find">
        <h2 className="find__title">Znajdź campera</h2>
        <p class="find_desc">Wybierz z listy: </p>
        <div class="select">
          <select id="cars" name="camperType" onChange={handleSelectType}>
            <option value="allcapers">All Campers</option>
            <option value="campervan">Campervan</option>
            <option value="integra">Integra</option>
            <option value="polintegra">Półintegra</option>
            <option value="alkowa">Alkowa</option>
          </select>
          <div class="select_arrow"></div>
        </div>
      </div>
    );
  }
  