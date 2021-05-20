import './PatternLibrary.scss'

const PatternLibrary = () => {
  const colors = [
    'orange',
    'cyan',
    'pink',
    'blue',
    'white',
    'black'
  ]

  return (
    <div className='PL'>
      <div className='PL_Typography'>
        <h1 className='PL_TypographySample'>
          h1 - Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.
        </h1>
        <h2 className='PL_TypographySample'>
          h2 - Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.
        </h2>
        <p className='PL_TypographySample'>
          body - I’m not superstitious, but I am a little stitious.
        </p>
      </div>
      <div className='PL_Colors'>
        {colors.map((color, i) => {
          return (
            <div className='PL_ColorsPalette' key={i}>
              <h2 className='PL_ColorsPaletteTitle'>
                {color}
              </h2>
              <div className={`PL_ColorsPaletteColor PL_ColorsPaletteColor__${color}`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PatternLibrary
