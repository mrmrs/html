//--------------------------------------------------------------------------------------------------------------
//functions for transforming opinion(s) to Html code

function opinion2html(opinion){


    //TODO finish opinion2html
const opinionTemplate=
`
    <section>
       <h3><i>(${(new Date(opinion.created)).toDateString()})</i></h3>

       <p>${opinion.IL}</p>
       <p>${opinion.FN}</p>
       <p>${opinion.LN}</p>
       <p>${opinion.EL}</p>
       <p>${opinion.DD}</p>
       <p>${opinion.RB}</p>
       <p>${opinion.UI}</p>
       <p>${opinion.TA}</p>
       <p>${opinion.CB?"I loved this page.":"Sorry, I did not love it."}</p>
    </section>`;
return opinionTemplate;                                              


}

function opinionArray2html(sourceData){

    //TODO finish opinionArray2html
    return sourceData.reduce((htmlWithOpinions,opn) => htmlWithOpinions+ opinion2html(opn),"");

}


//data and localStorage handling at startup

    let opinions=[];

    const opinionsElm=document.getElementById("opinionsContainer");

    if(localStorage.myForms){
        opinions=JSON.parse(localStorage.myForms);
    }

    opinionsElm.innerHTML=opinionArray2html(opinions);

    

     //--------------------------------------------------------------------------------------------------------------
    //Form processing functionality
    let myFrmElm=document.getElementById("OF");

    myFrmElm.addEventListener
    ("submit",processOpnFrmData);

    function processOpnFrmData(event){
        //1.prevent normal event (form sending) processing
        event.preventDefault();

        //2. Read and adjust data from the form (here we remove white spaces before and after the strings)
        const InputLabel = document.getElementById("inp").value.trim();
        const FirstName = document.getElementById("first-name").value.trim();
        const LastName = document.getElementById("last-name").value.trim();
        const Email = document.getElementById("email").value.trim();
        const Dropdown = document.getElementById("gender").value;
        const RadioButtons = document.getElementById("myRadio").value;
        const URLInput = document.getElementById("url").value.trim();
        const Textarea = document.getElementById("msg").value.trim();
        const checkbox = document.getElementById("cb").checked;        
             
        
       

         //3. Add the data to the array opinions and local storage
        const newOpinion =
            {
                IL: InputLabel,
                FN: FirstName,
                LN: LastName,  
                EL: Email,              
                DD: Dropdown,
                RB: RadioButtons, 
                UI: URLInput,
                TA: Textarea,
                CB: checkbox,              
                created: new Date()
            };

        opinions.push(newOpinion);

        localStorage.myForms = JSON.stringify(opinions);

        //4. Update HTML
        //TODO add the new opinion to HTML
        opinionsElm.innerHTML+=opinion2html(newOpinion);

        //5. Reset the form
        myFrmElm.reset(); //resets the form
    }