import React, { useState } from 'react'
import './contractor.css'
// import Supplier from '../pages/Supplier'

function Contractor1({ service0 }) {

    // const [selectedValue, setSelectedValue] = useState('');

    // const handleChange = (event) => {
    //     setSelectedValue(event.target.value);
    // };


    const [opt, opts] = useState("nothing");

    // const [textareaValue, setTextareaValue] = useState('');
    const myreturnopt = () => {
        console.log(opt);
        sessionStorage.setItem("opts", opt);


    }

    // const abc =(e)=>opts()
    const xyz = (e) => {
        opts(e.target.value)
    }

    // const texts = ()=>{

    // console.log(opt);

    // sessionStorage.setItem("setTextareaValue",textareaValue);


    // }

    // const writer = (el)=>{
    //     const newval=el.target.value

    //     setTextareaValue(newval) 
    // }




    return (
        <>

            <div className="roper" onClick={service0}></div>

            <div className="contmainA">
                <div className="cont0A">
                    <div className="cont1A">
                        <h4>Contractors</h4>
                        <div className="duckED">
                            <input type="radio" id="ageED1" name="crd" value="Plumber" />
                            <label htmlFor="ageED1">Plumber</label>
                        </div>


                        <div className="duckED">
                            <input type="radio" id="ageED2" name="crd"
                                value="Electrician"


                            />
                            <label htmlFor="ageED2">Electrician</label>
                            {/* <Supplier inputValue={selectedValue}/> */}
                        </div>





                        <div className="duckED">
                            <input type="radio" id="ageED3" name="crd" value="Carpenter" onClick={xyz} />
                            <label htmlFor="ageED3">Carpenter</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED4" name="crd" value="Shuttering" onClick={xyz} />
                            <label htmlFor="ageED4">Shuttering</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED5" name="crd" value="Waterproofing" onClick={xyz} />
                            <label htmlFor="ageED5">Waterproofing</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED6" name="crd" onClick={xyz} value="Heat insulation" />
                            <label htmlFor="ageED6">Heat insulation</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED7" name="crd" onClick={xyz} value="Painter" />
                            <label htmlFor="ageED7">Painter</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED8" name="crd" onClick={xyz} value="Flooring" />
                            <label htmlFor="ageED8">Flooring</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED9" name="crd" onClick={xyz} value="Pop" />
                            <label htmlFor="ageED9">Pop</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED10" name="crd" onClick={xyz} value="False Celling" />
                            <label htmlFor="ageED10">False Celling</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED11" name="crd" onClick={xyz} value="Upvc fitting" />
                            <label htmlFor="ageED11">Upvc fitting</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED12" name="crd" onClick={xyz} value="Aluminium fittings" />
                            <label htmlFor="ageED12">Aluminium fittings</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED13" name="crd" onClick={xyz} value="Glass" />
                            <label htmlFor="ageED13">Glass</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED14" name="crd" onClick={xyz} value="Fire system" />
                            <label htmlFor="ageED14">Fire system</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED15" name="crd" onClick={xyz} value="Landscapers" />
                            <label htmlFor="ageED15">Landscapers</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED16" name="crd" onClick={xyz} value="Architects" />
                            <label htmlFor="ageED16">Architects</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED17" name="crd" onClick={xyz} value="Interior designers" />
                            <label htmlFor="ageED17">Interior designers</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED18" name="crd" onClick={xyz} value="Jcb movers" />
                            <label htmlFor="ageED18">Jcb movers</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED19" name="crd" onClick={xyz} value="Construction/civil contractor" />
                            <label htmlFor="ageED19">Construction/civil contractor</label>
                        </div>
                    </div>




                    <div className="cont2A">
                        <h4>Material vendors/suppliers</h4>
                        <div className="duckED">
                            <input type="radio" id="ageED01" name="crd" onClick={xyz} value="Sanitary/bath fittings" />
                            <label htmlFor="ageED01">Sanitary/bath fittings</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED02" name="crd" onClick={xyz} value="Electrical/lightings" />
                            <label htmlFor="ageED02">Electrical/lightings</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED03" name="crd" onClick={xyz} value="Tiles/flooring" />
                            <label htmlFor="ageED03">Tiles/flooring</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED04" name="crd" onClick={xyz} value="Wood work" />
                            <label htmlFor="ageED04">Wood work</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED05" name="crd" onClick={xyz} value="Pains and surface care" />
                            <label htmlFor="ageED05">Pains and surface care</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED06" name="crd" onClick={xyz} value="wallpaper/pvc/vineer" />
                            <label htmlFor="ageED06">wallpaper/pvc/vineer</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED07" name="crd" onClick={xyz} value="Bricks/sand" />
                            <label htmlFor="ageED07">Bricks/sand</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED08" name="crd" onClick={xyz} value="Cement" />
                            <label htmlFor="ageED08">Cement</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED09" name="crd" onClick={xyz} value="Iron" />
                            <label htmlFor="ageED09">Iron</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED010" name="crd" onClick={xyz} value="Crushed stone/bajri" />
                            <label htmlFor="ageED010">Crushed stone/bajri</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED011" name="crd" onClick={xyz} value="Modular kitchen" />
                            <label htmlFor="ageED011">Modular kitchen</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED012" name="crd" onClick={xyz} value="Hardware and tools" />
                            <label htmlFor="ageED012">Hardware and tools</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED013" name="crd" onClick={xyz} value="Marbles and stone" />
                            <label htmlFor="ageED013">Marbles and stone</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED014" name="crd" onClick={xyz} value="Gates/grills/railings" />
                            <label htmlFor="ageED014">Gates/grills/railings</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED015" name="crd" onClick={xyz} value="Water tanks" />
                            <label htmlFor="ageED015">Water tanks</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED016" name="crd" onClick={xyz} value="Solar pannels" />
                            <label htmlFor="ageED016">Solar pannels</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED017" name="crd" onClick={xyz} value="Air conditioning" />
                            <label htmlFor="ageED017">Air conditioning</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="ageED018" name="crd" onClick={xyz} value="Elevator" />
                            <label htmlFor="ageED018">Elevator</label>
                        </div>
                        <div className="duckED">
                            <input type="radio" id="agedED019" name="crd" onClick={xyz} value="Cctv/security system" />
                            <label htmlFor="agedED019">Cctv/security system</label>
                        </div>

                        <div className="duckED">
                            <input type="radio" id="ageED019" name="crd" onClick={xyz} value="Water purifier" />
                            <label htmlFor="ageED019">Water purifier</label>
                        </div>

                    </div>
                </div>

                {/* <textarea id='message' placeholder='Other Service' value={textareaValue} rows={4} onChange={writer}></textarea> */}
                <textarea id='message' placeholder='Other Service' rows={4} onInput={xyz}></textarea>
                <div className="cotbtnA" onClick={service0}> <button type='submit' className='cont13' onClick={myreturnopt}>Continue</button>  </div>
            </div>




        </>
    )
}

export default Contractor1