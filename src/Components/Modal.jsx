import "../App.css";
export const Modal = (params) => {
  const { name, value } = params.data;

  window.handleModalVisibility = () => {
    document.querySelector(".my_tooltip").style.display = "none";
  };

  let a = `<div class="info-content">
      <div class="headerTooltip">
        <p class="title">${name}</p>
        <i style="margin-right:20px, color:cadetblue" class="fa-solid fa-x" onClick={handleModalVisibility()} ></i>
      </div>
      <hr/>
      ${value.map((info) => {
        return `<div class="text_content">
            <p class="subtitle">${Object.keys(info)[0]}</p>
            <div class="paragraph">
             <p>${Object.values(info)[0]}</p>
            </div>
          </div>`;
      })}
    </div>`;

    return a.toString();
};
