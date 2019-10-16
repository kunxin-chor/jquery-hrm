let app = new Vue({
    el: "#app",
    template:'#app-template',
    data: {
        game:"add",
        operand1:0,
        operand2:0,
        answer:0,
        history:[]
    },
    computed : {
        selectedOperator:function(){
            if (this.game=="add") {
                return "+";
            }
            else if (this.game=="subtract") {
                return "-";
            }
            else if (this.game=="multi") {
                return "x"
            }
        },
        correctAnswer:function(){
             if (this.game=="add") {
                return this.operand1 + this.operand2;
            }
            else if (this.game=="subtract") {
                return this.operand1 - this.operand2;
            }
            else if (this.game=="multi") {
                return this.operand1 * this.operand2;
            }
        }
    },
    created:function() {
    
        this.runGame();
    },
    methods: {
        runGame:function() {
            this.operand1 = Math.floor(Math.random() *50 + 1);
            this.operand2 = Math.floor(Math.random() * 50 + 1);
        },
        changeGame:function(gameType)
        {
            this.game = gameType;
            this.runGame();
        },
        checkAnswer:function() {
            if (parseInt(this.answer) === this.correctAnswer) {
                alert("Yay you got it correct!");
                this.history.push(true);
                
            } else {
                alert("The correct answer is " + this.correctAnswer + ". Better luck next time")
                this.history.push(false);
                
            }
            this.answer = 0;
            this.runGame();
        }
    }
});