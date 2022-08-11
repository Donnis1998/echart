import { Modal } from "../Components/Modal";

export const TreeOptions = (model) => {
  let option = {
    title: {
      id: "1",
      show: true,
      text: "BSoft Dependencies",
      subtext: "All dependencies in bsoft",
      link: "https://www.youtube.com/", //Este enlace se activará cuando se de click en el titulo
      target: "blank", //self //blank para abrir en una nueva pestaña
      left: 100, // '20%' // left // center // right
      top: 20, // '20%' // left // center // right
      textStyle: {
        fontSize: 30,
        fontStyle: "normal", // italic // oblique
        fontWeight: "bold", // normal // bolder // lighter // 100, 200, ...
        //width: 50,
        //height: 50,
      },
      subtextStyle: {
        fontSize: 20,
      },
    },
    tooltip: {
      show: true,
      trigger: "item", //axis //none
      triggerOn: "click", //click //mousemove
      showContent: true, //false
      padding: 0,
      alwaysShowContent: true,
      //showDelay: 100,
      //hideDelay: 100,
      zLevel: -1,
      //position:[10, 10],
      renderMode: "html", // richText
      //confine: true,
      //ellipsis: "...",
      textStyle: {
        //width: 30,
        //overflow: "break",
        //fontWeight: 'bold'
        //overflow: "truncate",
        //textBorderColor: "#FF3",
      },
      backgroundColor: "#FFF",
      borderColor: "#000",
      borderWidth: 1,
      //width: 100,
      className: "my_tooltip contenedor", //Specify the classes for the tooltip root DOM ,
      //extraCssText: 'word-break: break-all',
      position: "right", //bottom
      formatter: function (param) {
        return Modal(param);
        //return customComponent2(param);
      },
    },
    series: [
      {
        type: "tree",
        id: 0,
        name: "Dependencies",
        //layout: "radial",
        data: [model[0]], //[listData[0]],
        top: "10%",
        left: "10%",
        bottom: "10%",
        right: "10%",
        symbolSize: 17,
        edgeShape: "curve", //curve //polyline
        edgeForkPosition: "50%",
        initialTreeDepth: -1, // 2,
        lineStyle: {
          width: 2,
        },
        label: {
          backgroundColor: "#fff",
          position: "left",
          verticalAlign: "middle",
          align: "right",
          //show: false
          /* normal: {
                formatter: [
                  "The whole box is a {term|Text Block}, with",
                  "red border and grey background.",
                  "{fragment1|A Text Fragment} {fragment2|Another Text Fragment}",
                  "Text fragments can be customized.",
                ].join("\n"),
              }, */
        },
        leaves: {
          label: {
            position: "right",
            verticalAlign: "middle",
            align: "left",
          },
        },
        emphasis: {
          focus: "descendant",
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750,
        itemStyle: {
          color: "red",
          bordeAnch: 0.5,
          //borderType: 'dotted'
        },
      },
    ],
  };

  return option;
};
