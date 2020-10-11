import React from "react";

export function Home() {
  return (
    <div>
      <h1>Guitar Jam Sessions</h1>
      <div class="row">
        <div class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="text" id="autocomplete-input" class="autocomplete" />
              <label for="autocomplete-input">Autocomplete</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
