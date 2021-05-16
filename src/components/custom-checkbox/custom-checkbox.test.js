import React from "react";
import { shallow } from "enzyme";
import {mount} from 'enzyme'
import CustomCheckbox from './custom-checkbox'

const data={

    label:'some',
    name:'data',
    handleChange:function()
    {
        console.log('hey')
    },
    id:'1',
    active:'true'

}
const data2={
    label:'some',
    name:'data',
    handleChange:function(id)
    {
        console.log(id)
    },
    id:'1',
    active:'false'

}

describe("check if custom checkbox renders correctly", () => {
  let component;
 
  beforeEach(() => {
    component = shallow(<CustomCheckbox {...data}/>);
    
  });

  it("it should render show checkmark class when active", () => {
    const wrapper = component.find(".show-checkmark");
    expect(wrapper.length).toBe(1);
  });
  
  it("it should render show checkmark class when active", () => {
    component = shallow(<CustomCheckbox {...data2}/>);  
    const wrapper = component.find(".show-checkmark");
    expect(wrapper.length).toBe(0);
  });
  it('should change the link on click',()=>
  {
    const fn = jest.fn();
    component=shallow(<CustomCheckbox {...data}/>)
    const wrapper = component.find("span");
    expect (wrapper.length).toBe(1)
     const click=wrapper.simulate('click')
   
    
  })

});
