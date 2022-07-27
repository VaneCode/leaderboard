const validationFrm = (form) => {
    let val = true;
    if(form.elements[0].value === ' ' || form.elements[1].value === ' '){
        val = false;
    }

    return val;
};

export default validationFrm;