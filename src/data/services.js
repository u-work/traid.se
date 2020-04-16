import kopIcon from "../images/icons/shop.svg"
import geIcon from "../images/icons/shopping-bag.svg"
import saljIcon from "../images/icons/discount.svg"

export const services = {
  buy: {
    name: "Kop",
    desc:
      "Desto slitsammare är verkligheten i vården. Arbetsmarknadsförvaltningen har kartlagt behovet i stadsdelarna och sett att det behövs mycket personal med kort varsel.",
    icon: kopIcon,
  },
  sell: {
    name: "Salj",
    desc:
      "25 personer antogs till den första veckan som startade efter påsk. Undervisningen bedrivs både i klassrum och på distans. Vårdlärare från den normala verksamheten leder undervisningen.",
    icon: saljIcon,
  },
  give: {
    name: "Ge",
    desc:
      "Därför har staden dragit igång en expressutbildning som löper under en vecka. Den äger rum på Campus Åsö på Södermalm, ett kommunalt vuxengymnasium.",
    icon: geIcon,
  },
}
