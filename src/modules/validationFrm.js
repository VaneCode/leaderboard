const validationFrm = (form) => {
    let val = 'correct';
    if(form.elements[0].value.length === 0){
        form.elements[0].focus();
        return val = 'Please fill out the field name';  
    }else if(form.elements[1].value.length === 0){
        form.elements[0].focus();
        return val = 'Please fill out the field score';  
    }
    return val;
};

export default validationFrm;