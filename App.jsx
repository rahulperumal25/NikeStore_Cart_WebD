import React from 'react'
import { Cart, FlexContent, Footer, Hero, List, NavBar, Sales, Stories } from './components'
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';

const App = () => {
  return (
    
<>
<NavBar/>
<List/>
<Cart/>

<main className='flex flex-col gap-16 relative'>
<Hero heroapi={heroapi}/>
 <Sales endpoint={popularsales} ifExists/>
 <FlexContent endpoint={highlight} ifExists/>
 <Sales endpoint={toprateslaes}/>
 <FlexContent endpoint={sneaker}/>
 <Stories story={story}/>
</main>
<Footer footerAPI={footerAPI}/> 
</>   
     
        
    
  )
}

export default App