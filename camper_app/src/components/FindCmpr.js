import "../views/CamperCard/CamperCard.css";
export function FindCmpr({ getCamperType }) {
    function handleSelectType(e) {
      e.preventDefault();
      getCamperType(e.target.value);
    }
  
    return (
      <div class="find">

      <h2 className="find__title">Znajdź campera</h2>
      <p class="find_desc">Wybierz z listy: </p>

      <div class="select_one">
        <p>Typ campera</p>
        <select id="select__one">
          <option value="allcapers">Wybierz</option>
          <option value="campervan">Campervan</option>
          <option value="integra">Integra</option>
          <option value="polintegra">Półintegra</option>
          <option value="alkowa">Alkowa</option>
        </select>
        <div class="select_arrow"></div>  
      </div>

      <div class="select_two">
      <p>Województwo</p>
        <select id="select__two">
          <option>Wybierz</option>
          <option value="mazowieckie">mazowieckie</option>
          <option value="slaskie">śląskie</option>
          <option value="wielkopolskie">wielkopolskie</option>
          <option value="malopolskie">małopolskie</option>
          <option value="dolnoslaskie">dolnośląskie</option>
          <option value="lodzkie">łódzkie</option>
          <option value="pomorskie">pomorskie</option>
          <option value="podkarpackie">podkarpackie</option>
          <option value="lubelskie">lubelskie</option>
          <option value="kujawsko-pomorskie">kujawsko-pomorskie</option>
          <option value="zachodniopomorskie">zachodniopomorskie</option>
          <option value="warminsko-mazurskie">warmińsko-mazurskie</option>
          <option value="swietokrzyskie">świętokrzyskie</option>
          <option value="podlaskie">podlaskie</option>
          <option value="lubuskie">lubuskie</option>
          <option value="opolskie">opolskie</option>
        </select>
    </div>
  </div>
    );
  }
  