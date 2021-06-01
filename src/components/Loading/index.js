import './loading.scss';
import { colorArr } from "./../../js/colors.js";

export default function Loading({type = 'facebook'}) {

  return (
    <div className={`loader lds-${type}`}>
      {[...Array(9)].map((x, i) =>
        <div key={i} style={{backgroundColor: colorArr[i][1][600]}} />
      )}
    </div>
  )
}
