function s(o,r,i){let a;const d=document.createElement("div");return d.classList.add("card","bg-primary","w-fit","shadow-xl","text-primary-content","h-full","w-full"),function(l){const e=document.createElement("div");e.classList.add("card-body"),function(n){const t=document.createElement("h2");t.textContent=r,t.classList.add("card-title"),n.appendChild(t)}(e),function(n){const t=document.createElement("p");t.textContent=i,n.appendChild(t)}(e);const c=document.createElement("div");c.classList.add("card-actions","justify-end"),a=function(n){const t=document.createElement("button");return t.classList.add("btn","btn-error"),t.textContent="Remove",n.appendChild(t),t}(c),e.appendChild(c),l.appendChild(e)}(d),o.appendChild(d),{card:d,button:a}}export{s as createTodoCard};
