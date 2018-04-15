module.exports = {
  buildStringTimeRemaning: function () {
    let timeToGo = new Date();
    let now = new Date();
    //troca isso aqui antes de ir pra prod
    if (now.getDay() == 0) {
      return 'Hoje é domingo!!!!';
    } else if (now.getDay() == 6) {
      timeToGo = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);
    } else {
      timeToGo = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0);
    }
    let deltaTempoMinutos = ((timeToGo - now) / 60000 ); 
    let tempoString = '';
    if (deltaTempoMinutos < 60) {
      let minutos = Math.floor(deltaTempoMinutos)
      tempoString = (minutos === 1 ? '1 minuto' : `${minutos} minutos`)
    } else {
      let horas = Math.floor(deltaTempoMinutos/60)
      let minutos = Math.floor(deltaTempoMinutos - (horas * 60))
      horas === 1 ? horas = '1 hora' : horas = horas + ' horas'
      minutos === 1 ? minutos = ' 1 minuto ' : minutos = minutos + ' minutos'
      tempoString = `${horas} e ${minutos}`
    }

    if (now > timeToGo) {
      return 'Já estamos liberados!'
    } else {
      return `<code>time pra ir embora\n----------------------------\n${tempoString}</code>`
    }
  }
}