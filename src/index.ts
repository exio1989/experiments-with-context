function funcInGlobalScope() {
    console.log('funcInGlobalScope this', this);
}

function funcParent() {
    console.log('funcParent this', this);
    function funcChild() {
        console.log('funcChild this', this);
    }
    funcChild();
    this.f = funcChild;
    this.f();

    const funcChildExpression = function(){
        console.log('funcChildExpression this', this);
    }
    funcChildExpression();

    const funcChildExpressionArrow = () => {
        console.log('funcChildExpressionArrow this', this);
    }
    funcChildExpressionArrow();
}

const obj = {
    name:'vasya',
    funcParentAppliedToObj: function(){
        console.log('funcParentAppliedToObj this', this);
        this.f2 = funcParent;
        this.f2();
    },
    printName: function(cb: (() => void)){
        console.log('printName this', this);
        cb();
    },
    objFunc: function(){
        console.log('objFunc this', this);
    },
    printFuncInGlobalScope: function(){
        console.log('printFuncInGlobalScope this', this);
        funcInGlobalScope();
    },
    printFuncInGlobalScopeArrow: ()=>{
        console.log('printFuncInGlobalScopeArrow this', this);
        funcInGlobalScope();
    },
    printFuncInGlobalScopeApplyToVar: function(){
        console.log('printFuncInGlobalScopeApplyToVar this', this);
        this.func = funcInGlobalScope;
        this.func();
    },
}

console.log('---callback as arg this----------------------');
obj.printName(function () {
    console.log('callback as arg this', this);
});
console.log('');

console.log('---callback as arg this arrow func----------------------');
obj.printName(()=> {
    console.log('callback as arg this arrow func', this);
});
console.log('');

console.log('---objFunc----------------------');
obj.objFunc();
console.log('');

console.log('---objFunc aplied to global scope var----------------------');
const f1 = obj.objFunc;
f1();
console.log('');

console.log('--printFuncInGlobalScope-----------------------');
obj.printFuncInGlobalScope();
console.log('');

console.log('--printFuncInGlobalScopeArrow-----------------------');
obj.printFuncInGlobalScopeArrow();
console.log('');

console.log('--printFuncInGlobalScopeApplyToVar-----------------------');
obj.printFuncInGlobalScopeApplyToVar();
console.log('');

console.log('--funcParent-----------------------');
funcParent();
console.log('');

console.log('--funcParentAppliedToObj-----------------------');
obj.funcParentAppliedToObj();
console.log('');

class classA{
    funcInClass(): void{
        console.log('funcInClass this', this);
        const funcInFuncOfClass = function () {
            console.log('funcInFuncOfClass this', this);
        }
        funcInFuncOfClass();
    }
}

const classAInst = new classA();
console.log('--funcInClass-----------------------');
classAInst.funcInClass();
console.log('');

console.log('--funcInClass applied to globalscope var-----------------------');
const f3 = classAInst.funcInClass;
f3();
console.log('');


