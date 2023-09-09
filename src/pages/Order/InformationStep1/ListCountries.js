import us from './flags/united-states.png'
import uk from './flags/united-kingdom.png'
import fr from './flags/france.png'
import es from './flags/spain.png'
import ua from './flags/ukraine.png'
import it from './flags/italy.png'
import no from './flags/norway.png'
import de from './flags/germany.png'

const list = [
  {
    code: '1',
    flag: <img src={us} alt='USA'/>,
    name: 'United States'
  },
  {
    code: '33',
    flag: <img src={fr} alt='France'/>,
    name: ' France'
  },
  {
    code: '34',
    flag: <img src={es} alt='Spain'/>,
    name: 'Spain'
  },
  {
    code: '38',
    flag: <img src={ua} alt='Ukraine'/>,
    name: 'Ukraine'
  },
  {
    code: '39',
    flag: <img src={it} alt='Italy'/>,
    name: 'Italy'
  },
  {
    code: '44',
    flag: <img src={uk} alt='UK'/>,
    name: 'United Kingdom'
  },
  {
    code: '47',
    flag: <img src={no} alt='Norway'/>,
    name: 'Norway'
  },
  {
    code: '49',
    flag: <img src={de} alt='Germany'/>,
    name: 'Germany'
  }
]

export const findCurrentCountry = (phone) => {
  let result = null
  list.forEach((item) => {
    if (phone.startsWith(item.code) && result === null) {
     result = item
    }
  })
  return result
}
export default list