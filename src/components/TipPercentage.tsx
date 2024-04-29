import {Dispatch, SetStateAction} from 'react'
 type TipPercentageProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

const tipOptions = [
    {
        id:'tip-5',
        value:.05,
        label: '5%'
    },
    { id: 'tip-10',
        value:.10,
        label: '10%'
    },
    {
        id:'tip-15',
        value:.15,
        label: '15%'
    },
    {
        id:'tip-20',
        value:.20,
        label: '20%'
    },

    {
        id:'tip-25',
        value:.25,
        label: '25%'
    },
    {
        id:'tip-30',
        value:.30,
        label: '30%'
    },
    {
        id:'tip-35',
        value:.35,
        label: '35%'
    },
    {
        id:'tip-40',
        value:.40,
        label: '40%'
    },
    {
        id:'tip-45',
        value:.45,
        label: '45%'
    },
    {
        id:'tip-50',
        value:.50,
        label: '50%'
    }


]
const TipPercentage = ({setTip, tip}:TipPercentageProps) => {
  return (
    <div>
        <h3 className='font-black text-2xl'>
            Propina: 
        </h3>
        <form >
            {tipOptions.map(tipOpt=>(
                <div
                key={tipOpt.id}
                className="grid grid-cols-4 my-2  "
                >
                    <label htmlFor={tipOpt.id}>{tipOpt.label}</label>
                    <input 
                    id={tipOpt.id}
                    type="radio"
                    name="tip"
                    value={tipOpt.value}
                    onChange={e => setTip(+e.target.value)}
                    checked={tipOpt.value === tip}
                    />
                </div>
            ))}

        </form>
    </div>
  )
}

export default TipPercentage