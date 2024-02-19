const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Иванка",
            "id_4": "Артемия",
            "id_5": "Дария",
            "id_6": "Анастасия",
            "id_7": "Милана",
            "id_8": "Даниила",
            "id_9": "Евгения",
            "id_10": "Антония"
        }
    }`, 


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function () {
     const genderInt = Math.round(Math.random());
     //console.log("gender func: "+genderInt);
     return genderInt ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    profJson: `{
        "list": {     
            "id_1": "слесарь",
            "id_2": "солдат",
            "id_3": "шахтёр",
            "id_4": "кузнец",
            "id_5": "водитель",
            "id_6": "техник",
            "id_7": "дизайнер",
            "id_8": "сварщик",
            "id_9": "грузчик",
            "id_10": "банкир",
            "id_11": "кассир",
            "id_12": "актер",
            "id_13": "продавец",
            "id_14": "гид"
        }
    }`,   


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    randomIntYear: (max = 2003, min = 1920) => Math.floor(Math.random() * (max - min + 1) + min),
    randomIntMonth: (max = 12, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),
    
    randomIntDay: function () {
        min = 1;
        //console.log("this.person.month: "+this.person.month);
        switch (this.person.month) {
          case 2:
            max = 28;
            //console.log('2. max 28');
            break;
            case 4:
            case 6:
            case 9:
            case 11:
            //console.log('4 6 9 11. max 30');
            max = 30;
            break;
            default:
            max = 31;
            //console.log(`max 31`+"month: "+this.person.month);
        }
        let days = Math.floor(Math.random() * (max - min + 1) + min);
        //console.log("days: "+days);
        return days;
    },

    monthName: function () {
        //console.log("date month name int "+this.person.month);
        let fullDate = this.person.year+'-'+this.person.month+'-'+this.person.day;
        //console.log("date full name int "+fullDate);
        fullDate = new Date(fullDate);
        //console.log("date month name gen: "+fullDate);
        //const monthName = fullDate.toLocaleString('default', { month: 'long' });
        let monthName = fullDate.toLocaleString('ru-RU', { month: 'long' });
        //console.log("month name: "+monthName);

        switch (monthName) {
            case 'август':
            case 'март':
            //console.log('август март');
            monthName = monthName+'а';
            break;
            default:
            monthName = monthName.slice(0, -1);
            //console.log("month name slice: "+monthName);
            monthName = monthName+'я';
        }

        return monthName;
        //console.log("month name gen: "+monthName);
    },




    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        console.log("rand int num: "+prop);
        return obj.list[prop];
    },

   randomValueProf: function (json) {
        let minCount;
        const obj = JSON.parse(json);
        if (this.person.gender ==='Мужчина') {
            minCount = 1;
        } else {
            minCount = 10;
        }
        console.log("min count: "+minCount);

        const propProf = `id_${this.randomIntNumber(14, minCount)}`; 
        console.log("rand int num prof: "+propProf);
        return obj.list[propProf];
    },

    randomFirstName: function() {
        if (this.person.gender ==='Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }        
    },

    randomFirstFatherName: function() {
        const firstFatherName = this.randomValue(this.firstNameMaleJson);
        console.log(firstFatherName);
            return firstFatherName ;
    },    


     randomSurname: function() {
        if (this.person.gender ==='Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson)+'a';
        }
    },

    randomFatherName: function() {
        //let firstFatherName = this.randomValue(this.firstNameMaleJson);
        console.log(this.person.firstFatherName+" "+" gen: "+this.person.gender);
        if(this.person.firstFatherName ==='Никита'){
            this.person.firstFatherName = this.person.firstFatherName.slice(0, -1);
        }
        if (this.person.gender ==='Мужчина') {
            let suffix = 'ович';
            if (this.person.firstFatherName ==='Дмитрий' || this.person.firstFatherName ==='Андрей') {
                this.person.firstFatherName = this.person.firstFatherName.slice(0, -1);
                suffix = 'евич';
            }            
            console.log("this per fat name: "+this.person.firstFatherName);
            return this.person.firstFatherName+suffix;
        } else {
            let suffix = 'овна';
            if (this.person.firstFatherName ==='Дмитрий' || this.person.firstFatherName ==='Андрей') {
                this.person.firstFatherName = this.person.firstFatherName.slice(0, -1);
                suffix = 'евна';
            }
            return this.person.firstFatherName+suffix;
        } 
    },

    randomProf: function() {
        //if (this.person.gender ==='Мужчина') {
            return this.randomValueProf(this.profJson);
        //} else {
        //    return this.randomValueProf(this.profJson);
        // }        
    },    


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.year = this.randomIntYear();
        this.person.month = this.randomIntMonth();
        this.person.day = this.randomIntDay();
        console.log("pers day: "+this.person.day);
        this.person.monthName = this.monthName();
        console.log("monthName: "+this.person.monthName);
        this.person.birthDay = this.person.day+' '+this.person.monthName+' '+this.person.year;
        this.person.firstName = this.randomFirstName();        
        this.person.lastName = this.randomSurname();
        console.log("get pers gender: "+this.person.gender);
        this.person.firstFatherName = this.randomFirstFatherName();
        this.person.fatherName = this.randomFatherName();
        this.person.prof = this.randomProf();
        console.log("prof: "+this.person.prof);
        return this.person;
    }
};

// 










