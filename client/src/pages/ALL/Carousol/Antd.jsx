import React, { useState } from 'react';
import { Collapse, Select } from 'antd';

 import  { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
 import '../Carousol/Carousol.css'
import a from '../../../images/a.jpg'
import b from '../../../images/b.jpg'

const { Panel } = Collapse;


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
function Antd() {
 
    const [expandIconPosition, setExpandIconPosition] = useState('left');
    const onChange = (key) => {
      console.log(key);
    };
     
  return (
   <div style={{width:'90%',margin:'auto'}}>
      <div     style={{display:'flex',gap:'2rem' ,alignItems:'flex-start'}} className="flex   flexcolumn ">
      <div  style={{flex:'45%',width:'90%',margin:'auto' }}className="flexR">
     
       <Collapse
      defaultActiveKey={['']}
      onChange={onChange}
      expandIconPosition={expandIconPosition}
      style={{textAlign:'right'}}
    > 
     <Panel header="  هل يمكن الوثوق بفعالية لقاح كورونا بعد أن تم إنتاجه ✔️" key="1" >
        <div> 
        تم إنتاج لقاح كورونا بسرعة لأنه أعطي الأولوية في الموارد والإنتاج، وتم إثبات فعاليته في العديد من الدراسات.



        </div>
      </Panel>
     
    </Collapse>
       <br/>
      
      <Carousel 
     
     infiniteLoop={true}
    
     autoPlay={true}
     emulateTouch={true}
     stopOnHover	={true}
      showArrows={true}
   
  
     >
 
  
                 <div style={{width:'100%' ,height:'18rem'}}>
                     <img style={{display:'block',width:'100%',borderRight:'1px solid grey',borderLeft:'1px solid grey' ,height:'100%'}}src={a} />
                 </div>
                 <div style={{width:'100%',height:'18rem' }}>
                     <img style={{display:'block',width:'100%',borderRight:'1px solid grey',borderLeft:'1px solid grey' ,height:'100%'}}src={b} />
                 </div>
   
      
                
 
 
             </Carousel>

    
  

  
    

  
         </div>
    
       <div  style={{flex:'45%',width:'90%',margin:'auto',marginTop:'0'}}className="flexL">
     
       <Collapse
      defaultActiveKey={['']}
      onChange={onChange}
      expandIconPosition={expandIconPosition}
      style={{textAlign:'right'}}
    > 
     <Panel header="من هم الأشخاص الذين يتمتعون بالأولوية لأخذ لقاح كورونا؟ ✔️"   style={{textAlign:'right'}}   key="1" >
        <div>الأشخاص بعمر 65 عام وأكثر.
الأشخاص الذين يعانون من أمراض مزمنة.
اللاجئون، والسجناء، وأي تجمع لأشخاص كثيرين يعيشون معاً.
العاملون في قطاع التعليم والمواصلات والقطاع الصحي.
</div>
      </Panel>
     
    </Collapse>
    <br/>
     <Collapse  style={{textAlign:'right'}}
      defaultActiveKey={['']}
      onChange={onChange}
      expandIconPosition={expandIconPosition}
    > 
     <Panel   header="   ما هي الأعراض الجانبية للقاح كورونا؟ ✔️" key="1" >
        <div>التورم في موقع الحقن.
الصداع.
الارتفاع في درجة الحرارة.
الألم في العضلات.
الإرهاق.
وغالبية هذه الأعراض تتحسن خلال أيام قليلة

:اقرا المزيد من خلال موقع الطبي

https://altibbi.com/corona/index</div>
      </Panel>
     
    </Collapse>
     <br/>
   
     <Collapse  style={{textAlign:'right'}}
      defaultActiveKey={['']}
      onChange={onChange}
      expandIconPosition={expandIconPosition}
    > 
     <Panel   header="   ما هي الأعراض الجانبية للقاح كورونا؟ ✔️" key="1" >
        <div>التورم في موقع الحقن.
الصداع.
الارتفاع في درجة الحرارة.
الألم في العضلات.
الإرهاق.
وغالبية هذه الأعراض تتحسن خلال أيام قليلة

:اقرا المزيد من خلال موقع الطبي

https://altibbi.com/corona/index</div>
      </Panel>
     
    </Collapse>
    <br/>
     <Collapse  style={{textAlign:'right'}}
      defaultActiveKey={['']}
      onChange={onChange}
      expandIconPosition={expandIconPosition}
    > 
     <Panel   header="   ما هي الأعراض الجانبية للقاح كورونا؟ ✔️" key="1" >
        <div>التورم في موقع الحقن.
الصداع.
الارتفاع في درجة الحرارة.
الألم في العضلات.
الإرهاق.
وغالبية هذه الأعراض تتحسن خلال أيام قليلة

:اقرا المزيد من خلال موقع الطبي

https://altibbi.com/corona/index</div>
      </Panel>
     
    </Collapse>
    <br/>
     <Collapse  style={{textAlign:'right'}}
      defaultActiveKey={['']}
      onChange={onChange}
      expandIconPosition={expandIconPosition}
    > 
     <Panel   header="   ما هي الأعراض الجانبية للقاح كورونا؟ ✔️" key="1" >
        <div>التورم في موقع الحقن.
الصداع.
الارتفاع في درجة الحرارة.
الألم في العضلات.
الإرهاق.
وغالبية هذه الأعراض تتحسن خلال أيام قليلة

:اقرا المزيد من خلال موقع الطبي

https://altibbi.com/corona/index</div>
      </Panel>
     
    </Collapse>

   
 
  
   
  


         </div>
      </div>    

      
      </div>
  )
}

export default Antd