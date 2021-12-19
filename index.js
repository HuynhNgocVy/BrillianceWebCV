const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//upload
(() => {
    const profilePictureInput = document.getElementById("profile-picture");
    const profilePictureElement = document.getElementById("js-profile-picture");

    profilePictureInput.addEventListener("change", (event) => {
        
        Array.from(event.target.files).forEach((file) => {
            if (!file.type.startsWith("image/")) {
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                profilePictureElement.src = event.target.result;
            }
            reader.readAsDataURL(file);
        })
    })
    setTimeout(() => {
        profilePictureElement.onload = function() {
            profilePictureElement.style.padding = '0';
        }
    }, 3000); 
    
})();
(() => {
    const profilePictureInput2 = document.getElementById("profile-picture2");
    const profilePictureElement2 = document.getElementById("js-profile-picture2");
    profilePictureInput2.addEventListener("change", (event) => {
        Array.from(event.target.files).forEach((file) => {
            if (!file.type.startsWith("image/")) {
                return;
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                profilePictureElement2.src = event.target.result;
            }
            reader.readAsDataURL(file);
        })
    })
    setTimeout(() => {
        profilePictureElement2.onload = function() {
            profilePictureElement2.style.padding = '0';
        }
    }, 3000); 
    
})();

//Skill
(() => {
  var progressElement = $$('.progress');
  var progressElement2 = $$('.progress2');

  var progressClick = $$('.cv-progress-bar');
    Array.from(progressClick).forEach((skill, index) => {
      skill.addEventListener('click',(e) => {
          var width = e.offsetX/1.56;
          progressElement[index].style.width = `${width}%`;
          })
    })
    Array.from(progressClick).forEach((skill, index) => {
        skill.addEventListener('click',(e) => {
            var width2 = e.offsetX/1.78;
            progressElement2[index-3].style.width = `${width2}%`;
            })
        })
})();
//Click hiện modal
(() => {
  var myModal = $(".modal")
    document.getElementById("btn__download--click").onclick = function() {
        myModal.style.display = "flex"; 
    }
    document.getElementById("close__item").onclick = function() {
        myModal.style.display = "none"; 
    }
    window.onclick = function(event) {
        if (event.target == myModal) {
            myModal.style.display = "none";
        }
    }
    var myModalDelete = $(".modal__delete")
    var mydelete = $$(".js-delete")
    for(var i = 0; i < mydelete.length; i++) {
        mydelete[i].addEventListener('click', (e) => {
            myModalDelete.style.display = 'flex'
        })
    }
    var myModalAdd = $(".modal__add--social")
    var myAdd = $$(".js-add__social")
    for(var i = 0; i < myAdd.length; i++) {
        myAdd[i].addEventListener("click", (e) => {
            myModalAdd.style.display = "flex"
        })
    }
    var myModalAddContact = $(".modal__add--contact")
    var myAddContact = $$(".js-add__contact")
    for(var i = 0; i < myAddContact.length; i++) {
        myAddContact[i].addEventListener("click", (e) => {
            myModalAddContact.style.display = "flex"
        })
    }
    document.getElementById("close__delete").onclick = function() {
        myModalDelete.style.display = "none"; 
    }
    document.getElementById("close__add").onclick = function() {
        myModalAdd.style.display = "none"; 
    }
    document.getElementById("close__add--contact").onclick = function() {
        myModalAddContact.style.display = "none"; 
    }
    window.onclick = function(event) {
        if (event.target == myModalDelete) {
            myModalDelete.style.display = "none";
        }
    } 
})();
//preview
(() => {
    var modalPreview = $(".btn__priview") 
    var modal =  $(".modal__preview")
    modalPreview.addEventListener('click', function() {
        modal.style.display = 'flex';
        html2canvas($(".myCv__body1")).then(function (canvas) {			
            var anchorTag = document.createElement("a");
            document.body.appendChild(anchorTag);
            document.getElementById("previewImg").appendChild(canvas);
            anchorTag.href = canvas.toDataURL();
            $("canvas").style.width = '500px'
            $("canvas").style.height = 'auto'
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    let canvas = $("canvas")
                    $("#previewImg").removeChild(canvas)
                }
            }
        });
    });
})();
//left-right
(() => {
    $(".btn__duplicate").addEventListener("click", (e) => {
        $(".drop-down").style.display = 'block'
        $(".leftDrawer__desktop-container").style.display = 'block'
        $(".layout__sections form").style.display = 'none'
        $(".rightDrawer__desktop-container").style.display = 'none'
        $(".tip-example").classList.add("close--tips")
    })
    $(".btn__layout").addEventListener("click", (e) => {
        $(".layout__sections form").style.display = 'block'
        $(".leftDrawer__desktop-container").style.display = 'block'
        $(".drop-down").style.display = 'none'
        $(".rightDrawer__desktop-container").style.display = 'none'
        $(".tip-example").classList.add("close--tips")
    })
    $(".leftDrawer__desktop-btn").addEventListener('click',() => {
        $(".leftDrawer__desktop-container").style.display = 'none'
    })
    
    $(".btn__clocse--layout").addEventListener('click',() => {
        $(".leftDrawer__desktop-container").style.display = 'none'
    })
    $(".btn__hint").addEventListener('click', (e) => {
        $(".rightDrawer__desktop-container").style.display = 'block'
        $(".leftDrawer__desktop-container").style.display = 'none'
        $(".tip-example").classList.toggle("close--tips")
    })
    $(".btn__tricks").addEventListener('click', (e) => {
        $(".tricks-exmaple").style.display = 'block'
    })
    $(".btn__clocse--layout__right").addEventListener('click', (e) => {
        $(".rightDrawer__desktop-container").style.display = 'none'
        $(".tip-example").classList.toggle("close--tips")
    })
    $(".btn__clocse--tricks__right").addEventListener('click', (e) => {
        $(".tricks-exmaple").style.display = 'none'
    })
})();
//Delete
(() => {
    let deleteElement = $$(".js-delete")
    let contactItem = $$(".content-sections")
    let skillItem = $$(".content-sections__skill")
    let addDelete = $$(".add--delete")
    let contentDel = $$(".content")
    Array.from(deleteElement).forEach((del,index) => {
        del.addEventListener('click', function() {
            switch(index) {
                case 0: case 1: case 2:
                $(".btn--ok").addEventListener('click', (e) => {
                    contactItem[index].style.display = 'none';
                    $(".modal__delete").style.display = 'none'
                })
                $(".btn--cancel").addEventListener('click', (e) => {
                    $(".modal__delete").style.display = 'none'
                })
                break;
                case 3: case 4: case 5:
                    $(".btn--ok").addEventListener('click', (e) => {
                        skillItem[index-3].style.display = 'none';
                    $(".modal__delete").style.display = 'none'
                    })
                    $(".btn--cancel").addEventListener('click', (e) => {
                        $(".modal__delete").style.display = 'none'
                    })
                break;
                case 6: case 7: case 8:
                    $(".btn--ok").addEventListener('click', (e) => {
                        contactItem[index-3].style.display = 'none';
                        $(".modal__delete").style.display = 'none'
                    })
                    $(".btn--cancel").addEventListener('click', (e) => {
                        $(".modal__delete").style.display = 'none'
                    })
                break;
                default:
                    $(".btn--ok").addEventListener('click', (e) => {
                        contentDel[index-9].style.display = 'none';
                        $(".modal__delete").style.display = 'none'
                    })
                    $(".btn--cancel").addEventListener('click', (e) => {
                        $(".modal__delete").style.display = 'none'
                    })
                break;
            }
        })
    })
    let deleteElement2 = $$(".js-delete2")
    let contactItem2 = $$(".content-sections2")
    Array.from(deleteElement2).forEach((del,index) => {
        del.addEventListener('click', function() {
            $(".btn--ok").addEventListener('click', (e) => {
                contactItem2[index].style.display = 'none'
                $(".modal__delete").style.display = 'none'
            })
        })
        $(".btn--cancel").addEventListener('click', (e) => {
            $(".modal__delete").style.display = 'none'
        })
    })
    let deleteElement3 = $$(".js-delete3")
    let skillItem2 = $$(".content-sections__skill2")
    Array.from(deleteElement3).forEach((del,index) => {
        del.addEventListener('click', function() {
            $(".btn--ok").addEventListener('click', (e) => {
                skillItem2[index].style.display = 'none'
                $(".modal__delete").style.display = 'none'
            })
        })
        $(".btn--cancel").addEventListener('click', (e) => {
            $(".modal__delete").style.display = 'none'
        })
    }) 
    let deleteElement4 = $$(".js-delete4")
    let contentItem2 = $$(".content2")
    Array.from(deleteElement4).forEach((del,index) => {
        del.addEventListener('click', function() {
            $(".btn--ok").addEventListener('click', (e) => {
                contentItem2[index + 1].style.display = 'none'
                $(".modal__delete").style.display = 'none'
            })
        })
        $(".btn--cancel").addEventListener('click', (e) => {
            $(".modal__delete").style.display = 'none'
        })
    })       
})();
//move
(() => {
    let arrowDown1 = $$(".js-down1")
	let arrowUp1 = $$(".js-up1")
    let positionelement = $$(".contact-content-items")
    Array.from(arrowDown1).forEach((arrowDownElement, index) => {
        arrowDownElement.addEventListener("click", (event) => {
            var wrapper = positionelement[index].parentNode;
            if (wrapper.nextElementSibling)
                wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
               
         })
    })
    Array.from(arrowUp1).forEach((arrowUpElement, index) => {
        arrowUpElement.addEventListener("click", (event) => {
            var wrapper = positionelement[index].parentNode;
            if (wrapper.previousElementSibling)
                wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
        })
    })

    let arrowDown2 = $$(".js-down2")
	let arrowUp2 = $$(".js-up2")
    let positionelement2 = $$(".move-2")
    Array.from(arrowDown2).forEach((arrowDownElement, index) => {
        arrowDownElement.addEventListener("click", (event) => {
                var wrapper = positionelement2[index].parentNode;
                if (wrapper.nextElementSibling)
                    wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
         })
    })
    Array.from(arrowUp2).forEach((arrowUpElement, index) => {
        arrowUpElement.addEventListener("click", (event) => {
                var wrapper = positionelement2[index].parentNode;
                if (wrapper.previousElementSibling)
                    wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
        })
    })

    let arrowDown3 = $$(".js-down3")
	let arrowUp3 = $$(".js-up3")
    let positionelement3 = $$(".move-3")
    Array.from(arrowDown3).forEach((arrowDownElement, index) => {
        arrowDownElement.addEventListener("click", (event) => {
            var wrapper = positionelement3[index].parentNode;
            if (wrapper.nextElementSibling)
                wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper); 
        })
    })
    Array.from(arrowUp3).forEach((arrowUpElement, index) => {
        arrowUpElement.addEventListener("click", (event) => {
            var wrapper = positionelement3[index].parentNode;
            if (wrapper.previousElementSibling)
                wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
        })
    })

    let arrowDown4 = $$(".js-down4")
	let arrowUp4 = $$(".js-up4")
    let positionelement4 = $$(".content")
    Array.from(arrowDown4).forEach((arrowDownElement, index) => {
        arrowDownElement.addEventListener("click", (event) => {
                var wrapper = positionelement4[index].parentNode;
                if (wrapper.nextElementSibling)
                    wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper); 
        })
    })
    Array.from(arrowUp4).forEach((arrowUpElement, index) => {
        arrowUpElement.addEventListener("click", (event) => {
                var wrapper = positionelement4[index].parentNode;
                if (wrapper.previousElementSibling)
                    wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
        })
    })

    let arrowDown5 = $$(".js-down5")
	let arrowUp5 = $$(".js-up5")
    let positionelement5 = $$(".move-5")
    Array.from(arrowDown5).forEach((arrowDownElement, index) => {
        arrowDownElement.addEventListener("click", (event) => {
            var wrapper = positionelement5[index].parentNode;
            if (wrapper.nextElementSibling)
                wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
               
         })
    })
    Array.from(arrowUp5).forEach((arrowUpElement, index) => {
        arrowUpElement.addEventListener("click", (event) => {
            var wrapper = positionelement5[index].parentNode;
            if (wrapper.previousElementSibling)
                wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
        })
    })
    let arrowDown6 = $$(".js-down6")
	let arrowUp6 = $$(".js-up6")
    let positionelement6 = $$("ul")
    Array.from(arrowDown6).forEach((arrowDownElement, index) => {
        arrowDownElement.addEventListener("click", (event) => {
            var wrapper = positionelement6[index].parentNode;
            if (wrapper.nextElementSibling)
                wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper); 
        })
    })
    Array.from(arrowUp6).forEach((arrowUpElement, index) => {
        arrowUpElement.addEventListener("click", (event) => {
            var wrapper = positionelement6[index].parentNode;
            if (wrapper.previousElementSibling)
                wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
        })
    })
    let moveDown = $$(".js--down__column1")
	let moveUp = $$(".js--up__column1")
    let boxMoveEle = $$(".section__header--container")
    Array.from(moveDown).forEach((arrowDownElement, index) => {
        arrowDownElement.addEventListener("click", (event) => {
            var wrapper = boxMoveEle[index].parentNode;
            if (wrapper.nextElementSibling)
                wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper); 
        })
    })
    Array.from(moveUp).forEach((arrowUpElement, index) => {
        arrowUpElement.addEventListener("click", (event) => {
            var wrapper = boxMoveEle[index].parentNode;
            if (wrapper.previousElementSibling)
                wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
        })
    })
    let moveDown2 = $$(".js--down__column12")
	let moveUp2 = $$(".js--up__column12")
    let boxMoveEle2 = $$(".section__header--container2")
    Array.from(moveDown2).forEach((arrowDownElement, index) => {
        arrowDownElement.addEventListener("click", (event) => {
            var wrapper = boxMoveEle2[index].parentNode;
            if (wrapper.nextElementSibling)
                wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper); 
        })
    })
    Array.from(moveUp2).forEach((arrowUpElement, index) => {
        arrowUpElement.addEventListener("click", (event) => {
            var wrapper = boxMoveEle2[index].parentNode;
            if (wrapper.previousElementSibling)
                wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
        })
    })
})();
//Add
(() => {
    //column1
    //contact
    var btnAddContact = $$(".btn-add__contact")
    Array.from(btnAddContact).forEach((btn,index) => {
        btn.addEventListener("click", (e) => {
            let contactContainer = document.createElement("div")
            contactContainer.classList.add("content-sections","content-section__add")
            
            let contactSection = document.createElement("div")
            contactSection.classList.add("add--delete")
            
            let contactIcon = document.createElement("i")
            contactIcon.classList.add("far", "fa-arrow-alt-circle-down", "js-down1")
            let contactIcon3 = document.createElement("i")
            contactIcon3.classList.add("far", "fa-arrow-alt-circle-up", "js-up1")
            let contactIcon2 = document.createElement("i")
            contactIcon2.classList.add("far", "fa-trash-alt", "js-delete", "deleted-1")
            contactSection.append(contactIcon, contactIcon3, contactIcon2)
            
            let contactItems = document.createElement("div")
            contactItems.classList.add("contact-content-items")
            let contactItem = document.createElement("div")
            contactItem.classList.add("contact-content-item")
            let contactEle = document.createElement("i")
            contactEle.classList.add("fas", `fa-${btn.classList[1]}`)
            contactItem.append(contactEle)
            let contacContent = document.createElement("span")
            contacContent.classList.add("contact-content-text")
            contacContent.setAttribute("contenteditable","true")
            contactItems.append(contactItem, contacContent)
            
            contactContainer.append(contactSection,contactItems)
            $(".container__add--contact").append(contactContainer)
            $(".modal__add--contact").style.display = 'none';
            let deleteSection3 = $$(".content-section__add")
            let deleteElements = $$(".deleted-1")
            Array.from(deleteElements).forEach((deleteElement, index) => {
                deleteElement.addEventListener('click', (e) => {
                    deleteSection3[index].style.display = 'none'
                })
            })
            let arrowDown3 = $$(".js-down1")
            let arrowUp3 = $$(".js-up1")
            let positionelement3 = $$(".contact-content-items")
            Array.from(arrowDown3).forEach((arrowDownElement, index) => {
                arrowDownElement.addEventListener("click", (event) => {
                        var wrapper = positionelement3[index].parentNode;
                        if (wrapper.nextElementSibling)
                            wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper); 
                })
            })
            Array.from(arrowUp3).forEach((arrowUpElement, index) => {
                arrowUpElement.addEventListener("click", (event) => {
                        var wrapper = positionelement3[index].parentNode;
                        if (wrapper.previousElementSibling)
                            wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
                })
            })
        })
    })
    Array.from(btnAddContact).forEach((btn,index) => {
        btn.addEventListener("click", (e) => {
            let contactContainer = document.createElement("div")
            contactContainer.classList.add("content-sections","content-section__add2")
            
            let contactSection = document.createElement("div")
            contactSection.classList.add("add--delete")
            
            let contactIcon = document.createElement("i")
            contactIcon.classList.add("far", "fa-arrow-alt-circle-down", "js-down2")
            let contactIcon3 = document.createElement("i")
            contactIcon3.classList.add("far", "fa-arrow-alt-circle-up", "js-up2")
            let contactIcon2 = document.createElement("i")
            contactIcon2.classList.add("far", "fa-trash-alt", "js-delete", "deleted-12")
            contactSection.append(contactIcon, contactIcon3, contactIcon2)
            
            let contactItems = document.createElement("div")
            contactItems.classList.add("contact-content-items", "move-5")
            let contactItem = document.createElement("div")
            contactItem.classList.add("contact-content-item","contact-content-item2")
            let contactEle = document.createElement("i")
            contactEle.classList.add("fas", `fa-${btn.classList[1]}`)
            contactItem.append(contactEle)

            let contacContent = document.createElement("span")
            contacContent.classList.add("contact-content-text","contact-content-text2")
            contacContent.setAttribute("contenteditable","true")
            contactItems.append(contactItem, contacContent)
            
            contactContainer.append(contactSection,contactItems)
            $$(".container__add--contact")[1].append(contactContainer)
            $(".modal__add--contact").style.display = 'none';
            let deleteSection3 = $$(".content-section__add2")
            let deleteElements = $$(".deleted-12")
            Array.from(deleteElements).forEach((deleteElement, index) => {
                deleteElement.addEventListener('click', (e) => {
                    deleteSection3[index].style.display = 'none'
                })
            })
            let arrowDown5 = $$(".js-down2")
            let arrowUp5 = $$(".js-up2")
            let positionelement5 = $$(".move-5")
            Array.from(arrowDown5).forEach((arrowDownElement, index) => {
                arrowDownElement.addEventListener("click", (event) => {
                        var wrapper = positionelement5[index].parentNode;
                        if (wrapper.nextElementSibling)
                            wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper); 
                })
            })
            Array.from(arrowUp5).forEach((arrowUpElement, index) => {
                arrowUpElement.addEventListener("click", (event) => {
                        var wrapper = positionelement5[index].parentNode;
                        if (wrapper.previousElementSibling)
                            wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
                })
            })
        })
    })
    //social
    var btnAdd = $$(".btn-add__social")
    Array.from(btnAdd).forEach((btn,index) => {
        btn.addEventListener("click", (e) => {
            let contactContainer = document.createElement("div")
            contactContainer.classList.add("content-sections","content-section__social")
            
            let contactSection = document.createElement("div")
            contactSection.classList.add("add--delete")
            
            let contactIcon = document.createElement("i")
            contactIcon.classList.add("far", "fa-arrow-alt-circle-down", "js-down3")
            let contactIcon3 = document.createElement("i")
            contactIcon3.classList.add("far", "fa-arrow-alt-circle-up", "js-up3")
            let contactIcon2 = document.createElement("i")
            contactIcon2.classList.add("far", "fa-trash-alt", "js-delete", "deleted-social")
            contactSection.append(contactIcon, contactIcon3, contactIcon2)
            
            let contactItems = document.createElement("div")
            contactItems.classList.add("contact-content-items", "move-3")
            let contactItem = document.createElement("div")
            contactItem.classList.add("contact-content-item")
            let contactEle = document.createElement("i")
            contactEle.classList.add("fab", `fa-${btn.classList[1]}`)
            contactItem.append(contactEle)

            let contacContent = document.createElement("span")
            contacContent.classList.add("contact-content-text")
            contacContent.setAttribute("contenteditable","true")
            contactItems.append(contactItem, contacContent)
            
            contactContainer.append(contactSection,contactItems)
            $(".container__add--social").append(contactContainer)
            $(".modal__add--social").style.display = 'none';
            let deleteSection3 = $$(".content-section__social")
            let deleteElements = $$(".deleted-social")
            Array.from(deleteElements).forEach((deleteElement, index) => {
                deleteElement.addEventListener('click', (e) => {
                    deleteSection3[index].style.display = 'none'
                })
            })
            let arrowDown3 = $$(".js-down3")
            let arrowUp3 = $$(".js-up3")
            let positionelement3 = $$(".move-3")
            Array.from(arrowDown3).forEach((arrowDownElement, index) => {
                arrowDownElement.addEventListener("click", (event) => {
                        var wrapper = positionelement3[index].parentNode;
                        if (wrapper.nextElementSibling)
                            wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper); 
                })
            })
            Array.from(arrowUp3).forEach((arrowUpElement, index) => {
                arrowUpElement.addEventListener("click", (event) => {
                        var wrapper = positionelement3[index].parentNode;
                        if (wrapper.previousElementSibling)
                            wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
                })
            })
        })
    })
    Array.from(btnAdd).forEach((btn,index) => {
        btn.addEventListener("click", (e) => {
            let contactContainer = document.createElement("div")
            contactContainer.classList.add("content-sections","content-section__social2")
            
            let contactSection = document.createElement("div")
            contactSection.classList.add("add--delete")
            
            let contactIcon = document.createElement("i")
            contactIcon.classList.add("far", "fa-arrow-alt-circle-down", "js-down1")
            let contactIcon3 = document.createElement("i")
            contactIcon3.classList.add("far", "fa-arrow-alt-circle-up", "js-up1")
            let contactIcon2 = document.createElement("i")
            contactIcon2.classList.add("far", "fa-trash-alt", "js-delete", "deleted-social2")
            contactSection.append(contactIcon, contactIcon3, contactIcon2)
            
            let contactItems = document.createElement("div")
            contactItems.classList.add("contact-content-items", "move-32")
            let contactItem = document.createElement("div")
            contactItem.classList.add("contact-content-item","contact-content-item2")
            let contactEle = document.createElement("i")
            contactEle.classList.add("fab", `fa-${btn.classList[1]}`)
            contactItem.append(contactEle)
            let contacContent = document.createElement("span")
            contacContent.classList.add("contact-content-text", "contact-content-text2")
            contacContent.setAttribute("contenteditable","true")
            contactItems.append(contactItem, contacContent)
            
            contactContainer.append(contactSection,contactItems)
            $$(".container__add--social")[1].append(contactContainer)
            $(".modal__add--social").style.display = 'none';
            let deleteSection3 = $$(".content-section__social2")
            let deleteElements = $$(".deleted-social2")
            Array.from(deleteElements).forEach((deleteElement, index) => {
                deleteElement.addEventListener('click', (e) => {
                    deleteSection3[index].style.display = 'none'
                })
            })
            let arrowDown3 = $$(".js-down3")
            let arrowUp3 = $$(".js-up3")
            let positionelement3 = $$(".move-32")
            Array.from(arrowDown3).forEach((arrowDownElement, index) => {
                arrowDownElement.addEventListener("click", (event) => {
                        var wrapper = positionelement3[index].parentNode;
                        if (wrapper.nextElementSibling)
                            wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper); 
                })
            })
            Array.from(arrowUp3).forEach((arrowUpElement, index) => {
                arrowUpElement.addEventListener("click", (event) => {
                        var wrapper = positionelement3[index].parentNode;
                        if (wrapper.previousElementSibling)
                            wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
                })
            })
        })
    })

    var addSkill = $$(".js-add")
    Array.from(addSkill).forEach((skill,index) => {
        skill.addEventListener("click", function() {
            let contactContainer = document.createElement("div")
            contactContainer.classList.add("content-sections__skill", "added-2")
            
            let contactSection = document.createElement("div")
            contactSection.classList.add("add--delete")
            
            let contactIcon = document.createElement("i")
            contactIcon.classList.add("far", "fa-arrow-alt-circle-down", "js-down2")
            let contactIcon3 = document.createElement("i")
            contactIcon3.classList.add("far", "fa-arrow-alt-circle-up", "js-up2")
            let contactIcon2 = document.createElement("i")
            contactIcon2.classList.add("far", "fa-trash-alt", "js-delete", "deleted-skill")
            contactSection.append(contactIcon, contactIcon3, contactIcon2)
            
            let contactLabel = document.createElement("label")
            contactLabel.classList.add("section__skill")
            contactLabel.setAttribute("contenteditable","true")
            contactLabel.textContent = "Skill"
    
            let progressBar =  document.createElement("div")
            progressBar.classList.add("cv-progress-bar","move-2")
            let progress = document.createElement("div")
            progress.classList.add("progress")
            progress.style.width = "70%"
            progressBar.append(progress)
    
            contactContainer.append(contactSection,contactLabel,progressBar)
            $$(".container__add")[0].append(contactContainer)
    
            let deleteSection1 = $$(".added-2")
            let deleteElements = $$(".deleted-skill")
            Array.from(deleteElements).forEach((deleteElement, index) => {
                deleteElement.addEventListener('click', (e) => {
                    deleteSection1[index].style.display = 'none'
                })
            })
            var progressElement = $$('.progress');
    
            var progressClick = $$('.cv-progress-bar');
            Array.from(progressClick).forEach((skill, index) => {
                skill.addEventListener('click',(e) => {
                    var width = e.offsetX/1.56;
                    progressElement[index].style.width = `${width}%`;
                })
            })
            
            let arrowDown2 = $$(".js-down2")
            let arrowUp2 = $$(".js-up2")
            let positionelement2 = $$(".move-2")
            Array.from(arrowDown2).forEach((arrowDownElement, index) => {
                arrowDownElement.addEventListener("click", (event) => {
                        var wrapper = positionelement2[index].parentNode;
                        if (wrapper.nextElementSibling)
                            wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
                })
            })
            Array.from(arrowUp2).forEach((arrowUpElement, index) => {
                arrowUpElement.addEventListener("click", (event) => {
                        var wrapper = positionelement2[index].parentNode;
                        if (wrapper.previousElementSibling)
                            wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
                })
            })
        })  
    })
    Array.from(addSkill).forEach((skill,index) => {
        skill.addEventListener("click", function() {
            let contactContainer = document.createElement("div")
            contactContainer.classList.add("content-sections__skill", "content-sections__skill2", "added-22")
            
            let contactSection = document.createElement("div")
            contactSection.classList.add("add--delete")
            
            let contactIcon = document.createElement("i")
            contactIcon.classList.add("far", "fa-arrow-alt-circle-down", "js-down2")
            let contactIcon3 = document.createElement("i")
            contactIcon3.classList.add("far", "fa-arrow-alt-circle-up", "js-up2")
            let contactIcon2 = document.createElement("i")
            contactIcon2.classList.add("far", "fa-trash-alt", "js-delete", "deleted-skills2")
            contactSection.append(contactIcon, contactIcon3, contactIcon2)
            
            let contactLabel = document.createElement("label")
            contactLabel.classList.add("section__skill","section__skill2")
            contactLabel.setAttribute("contenteditable","true")
            contactLabel.textContent = "Skill"
    
            let progressBar =  document.createElement("div")
            progressBar.classList.add("cv-progress-bar","cv-progress-bar_cv2","move-2")
            let progress = document.createElement("div")
            progress.classList.add("progress","progress2")
            progress.style.width = "70%"
            progressBar.append(progress)
    
            contactContainer.append(contactSection,contactLabel,progressBar)
            $$(".container__add")[1].append(contactContainer)
    
            let deleteSection1 = $$(".added-22")
            let deleteElements = $$(".deleted-skills2")
            Array.from(deleteElements).forEach((deleteElement, index) => {
                deleteElement.addEventListener('click', (e) => {
                    deleteSection1[index].style.display = 'none'
                })
            })
            var progressElement = $$('.progress');
    
            var progressClick = $$('.cv-progress-bar');
            Array.from(progressClick).forEach((skill, index) => {
                skill.addEventListener('click',(e) => {
                    var width = e.offsetX/1.78;
                    progressElement[index].style.width = `${width}%`;
                })
            })
            
            let arrowDown2 = $$(".js-down2")
            let arrowUp2 = $$(".js-up2")
            let positionelement2 = $$(".move-2")
            Array.from(arrowDown2).forEach((arrowDownElement, index) => {
                arrowDownElement.addEventListener("click", (event) => {
                        var wrapper = positionelement2[index].parentNode;
                        if (wrapper.nextElementSibling)
                            wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
                })
            })
            Array.from(arrowUp2).forEach((arrowUpElement, index) => {
                arrowUpElement.addEventListener("click", (event) => {
                        var wrapper = positionelement2[index].parentNode;
                        if (wrapper.previousElementSibling)
                            wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
                })
            })
        })  
    })
//column-2 
    let addEle = $$(".js-add--content")
    Array.from(addEle).forEach((ele, index) => {
        ele.addEventListener("click", function() {
            let contactContainer = document.createElement("div")
            contactContainer.classList.add("content-sections","content__add")
            
            let contactSection = document.createElement("div")
            contactSection.classList.add("add--delete")
            
            let contactIcon = document.createElement("i")
            contactIcon.classList.add("far", "fa-arrow-alt-circle-down", "js-down4")
            let contactIcon3 = document.createElement("i")
            contactIcon3.classList.add("far", "fa-arrow-alt-circle-up", "js-up4")
            let contactIcon2 = document.createElement("i")
            contactIcon2.classList.add("far", "fa-trash-alt", "js-delete", "deleted-2")
            contactSection.append(contactIcon, contactIcon3, contactIcon2)
            
            let contentElement = document.createElement("p")
            contentElement.classList.add("content")
            contentElement.setAttribute("contenteditable", "true")
            contentElement.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, facilis tempore minus ipsa blanditiis tempora atque dolor eius vitae dolorem dolorum quibusdam, error quis laboriosam magni. Officia quo repellat in!"
            
            contactContainer.append(contactSection,contentElement)
            $$(".container__add--content")[index].append(contactContainer)

            let deleteSection4 = $$(".content__add")
            let deleteElements = $$(".deleted-2")
            Array.from(deleteElements).forEach((deleteElement, index) => {
                deleteElement.addEventListener('click', (e) => {
                    deleteSection4[index].style.display = 'none'
                })
            })
            let arrowDown4 = $$(".js-down4")
            let arrowUp4 = $$(".js-up4")
            let positionelement4 = $$(".content")
            Array.from(arrowDown4).forEach((arrowDownElement, index) => {
                arrowDownElement.addEventListener("click", (event) => {
                        var wrapper = positionelement4[index].parentNode;
                        if (wrapper.nextElementSibling)
                            wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper); 
                })
            })
            Array.from(arrowUp4).forEach((arrowUpElement, index) => {
                arrowUpElement.addEventListener("click", (event) => {
                        var wrapper = positionelement4[index].parentNode;
                        if (wrapper.previousElementSibling)
                            wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
                })
            })
        })         
})
})();
let cv1 = document.getElementById("img__cv1")
let cv2 = document.getElementById("img__cv2")
cv1.addEventListener('click', (e) => {
    // $(".img__cv.active").classList.remove("active")
    $(".myCv__body2").style.display = "none"
    $(".myCv__body").style.display = "flex"
    // this.classList.add('active')
})
cv2.addEventListener('click', (e) => {
    // $(".img__cv.active").classList.remove("active")
    $(".myCv__body").style.display = "none"
    $(".myCv__body2").style.display = "flex"
    // this.classList.add('active')
})
const downloadPDFElement = document.getElementById("download-pdf");
  downloadPDFElement.addEventListener("click", () => {
    var element = $(".myCv__body");
    element.style.pageBreakAfter = "always";
    const doc = new jspdf.jsPDF({
                format: "a4",
                orientation: "portrait",
                unit: "mm"
            });
    html2canvas($(".myCv__body"), {scale: 3}).then((canvas) => { 
    const contentDataURL = canvas.toDataURL("image/png");
    var position = 0;
    var imgWidth = doc.internal.pageSize.getWidth();
    var pageHeight = 295;
    var imgHeight = (canvas.height * imgWidth) / canvas.width;
    var heightLeft = imgHeight;
    if (doc.offsetTop + doc.imgHeight > doc.internal.pageSize.getHeight()) {
        offsetTop = 10;
        position = offsetTop;
    }
    doc.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
    }
    const valueInput = document.getElementById("download-input");
    doc.save(`${valueInput.value}.pdf`);
      }) 
  })  
  downloadPDFElement.addEventListener("click", () => {
    var element = $(".myCv__body");
    element.style.pageBreakAfter = "always";
    const doc = new jspdf.jsPDF({
                format: "a4",
                orientation: "portrait",
                unit: "mm"
            });
    html2canvas($(".myCv__body2"), {scale: 3}).then((canvas) => { 
    const contentDataURL = canvas.toDataURL("image/png");
    var position = 0;
    var imgWidth = doc.internal.pageSize.getWidth();
    var pageHeight = 295;
    var imgHeight = (canvas.height * imgWidth) / canvas.width;
    var heightLeft = imgHeight;
    if (doc.offsetTop + doc.imgHeight > doc.internal.pageSize.getHeight()) {
        offsetTop = 10;
        position = offsetTop;
    }
    doc.addImage(contentDataURL, "PNG", 0, 0, 210, 295);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(contentDataURL, "PNG", 0, 0, 210, 295);
        heightLeft -= pageHeight;
    }
    const valueInput = document.getElementById("download-input");
    doc.save(`${valueInput.value}.pdf`);
      }) 
  })  
//reset
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
    });

$(".btn__reset").addEventListener("click", () => {
    window.location.reload();
})
//print
$(".btn__print").addEventListener("click", () => {
    window.print();
})
//font
$(".seclet__fonts").onchange = function() {
    const font = this.value;
    $("body").style.fontFamily = font
}
//fontsize
$(".seclet__fontSize").onchange = function() {
    const fontSize = this.value;
    console.log(fontSize)
    $("body").style.fontSize = fontSize + 'px'
}
//color
const colorElements = $$(".container__color")
const primaryColor = $$(".primary--color")
const backgroundColorColumn1 = $$(".backgroundColor--coloumn1")
const backgroundColorColumn2 = $$(".backgroundColor--coloumn2")
Array.from(colorElements).forEach((value,index) => {
    value.addEventListener('click', (e) => {
        const color1 =  primaryColor[index].id
        const color2 = backgroundColorColumn1[index].id
        const color3 = backgroundColorColumn2[index].id
        document.documentElement.style.setProperty('--primary-color', `${color1}`);
        document.documentElement.style.setProperty('--primary-column1-backgroundColor', `${color2}`);
        document.documentElement.style.setProperty('--primary-column2-backgroundColor', `${color3}`);
    })
})
const customColor = $$(".custom--color__input input")
const primaryColorCustom = $(".primary--color__custom")
const backgroundColorColumn1Custom = $(".backgroundColor--coloumn1__custom")
const backgroundColorColumn2Custom = $(".backgroundColor--coloumn2__custom")
Array.from(customColor).forEach((value,index) => {
    value.addEventListener('input', (e) => {
        const color1 =  primaryColorCustom.value
        const color2 = backgroundColorColumn1Custom.value
        const color3 = backgroundColorColumn2Custom.value
        document.documentElement.style.setProperty('--primary-color', `${color1}`);
        document.documentElement.style.setProperty('--primary-column1-backgroundColor', `${color2}`);
        document.documentElement.style.setProperty('--primary-column2-backgroundColor', `${color3}`);
    })
})
const colorElements__cv2 = $$(".container__color__cv2")
const primaryColor__cv2 = $$(".primary--color__cv2")
const backgroundColorColumn1__cv2 = $$(".backgroundColor--coloumn1__cv2")
const backgroundColorColumn2__cv2 = $$(".backgroundColor--coloumn2__cv2")
Array.from(colorElements__cv2).forEach((value,index) => {
    value.addEventListener('click', (e) => {
        const color1_cv2 =  primaryColor__cv2[index].id
        const color2_cv2 = backgroundColorColumn1__cv2[index].id
        const color3_cv2 = backgroundColorColumn2__cv2[index].id
        document.documentElement.style.setProperty('--primary-color2', `${color1_cv2}`);
        document.documentElement.style.setProperty('--primary-column1-backgroundColor2', `${color2_cv2}`);
        document.documentElement.style.setProperty('--primary-column2-backgroundColor2', `${color3_cv2}`);
    })
})
const customColor__cv2 = $$(".custom--color__input__cv2 input")
const primaryColorCustom__cv2 = $(".primary--color__custom__cv2")
const backgroundColorColumn1Custom__cv2 = $(".backgroundColor--coloumn1__custom__cv2")
const backgroundColorColumn2Custom__cv2 = $(".backgroundColor--coloumn2__custom__cv2")
primaryColorCustom__cv2.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--primary-color2', `${primaryColorCustom__cv2.value}`);
})
backgroundColorColumn1Custom__cv2.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--primary-column1-backgroundColor2', `${backgroundColorColumn1Custom__cv2.value}`);
})
backgroundColorColumn2Custom__cv2.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--primary-column2-backgroundColor2', `${backgroundColorColumn2Custom__cv2.value}`);
})
const inputCheck = $$('input[type="checkbox"]')
Array.from(inputCheck).forEach((value,index) => {
    value.addEventListener('click', (e) => {
        const i = e.target.value
        console.log(e.target.checked)
        switch(i) {
            case '1':
                if(e.target.checked) {
                   $(".content--contact").style.display = 'block'
                   $(".content__field2.content--contact").style.display = 'block'
                }
                else {
                    $(".content--contact").style.display = 'none'
                    $(".content__field2.content--contact").style.display = 'none'
                }
                break;
            case '2':
                if(e.target.checked) {
                    $(".content--social").style.display = 'block'
                    $(".content__field2.content--social").style.display = 'block'
                }
                else {
                    $(".content--social").style.display = 'none'
                    $(".content__field2.content--social").style.display = 'none'
                }
                break;
                
            case '3':
                if(e.target.checked) {
                    $(".content--skills").style.display = 'block'
                    $(".content__field2.content--skills").style.display = 'block'
                 }
                 else {
                     $(".content--skills").style.display = 'none'
                     $(".content__field2.content--skills").style.display = 'none'
                 }
                 break;
            case '4':
                if(e.target.checked) {
                   $(".profile__section.introdution").style.display = 'block'
                   $(".content2.introdution").style.display = 'block'
                }
                else {
                    $(".profile__section.introdution").style.display = 'none'
                    $(".content2.introdution").style.display = 'none'
                }
                break;
            case '5':
                if(e.target.checked) {
                    $(".profile__section.education").style.display = 'block'
                    $(".profile__section.education2").style.display = 'block'
                }
                else {
                    $(".profile__section.education").style.display = 'none'
                    $(".profile__section.education2").style.display = 'none'
                }
                break;
            case '6':
                if(e.target.checked) {
                    $(".profile__section.experience").style.display = 'block'
                    $(".profile__section.experience2").style.display = 'block'
                }
                else {
                    $(".profile__section.experience").style.display = 'none'
                    $(".profile__section.experience2").style.display = 'none'
                }
                break;
            case '7':
                if(e.target.checked) {
                    $(".profile__section.awards").style.display = 'block'
                    $(".profile__section.awards2").style.display = 'block'
                }
                else {
                    $(".profile__section.awards").style.display = 'none'
                    $(".profile__section.awards2").style.display = 'none'
                   
                }
                break;
            
            case '8': 
                if(e.target.checked) {
                    if(e.target.checked) {
                        $(".profile__section.activities").classList.add("activities--block")
                        $(".profile__section.activities2").classList.add("activities2--block")
                    }
                    else {
                        $(".profile__section.activities").style.display = 'none'
                        $(".profile__section.activities2").style.display = 'none'
                    }
                    break;
                }
            case '9': 
                if(e.target.checked) {
                    if(e.target.checked) {
                        $(".profile__section.projects").style.display = 'block'
                        $(".profile__section.projects2").style.display = 'block'
                    }
                    else {
                        $(".profile__section.projects").style.display = 'none'
                        $(".profile__section.projects2").style.display = 'none'
                    }
                    break;
                }
            case '10': 
            if(e.target.checked) {
                if(e.target.checked) {
                    $(".profile__section.certificate").style.display = 'block'
                    $(".profile__section.certificate2").style.display = 'block'
                }
                else {
                    $(".profile__section.certificate").style.display = 'none'
                    $(".profile__section.certificate2").style.display = 'none'
                }
                break;
            }
        }
        
    })
})

