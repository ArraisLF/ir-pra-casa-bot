'use strict'

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const chatbot = new Telegram.Telegram('596233039:AAEXvTJMo-8XVRNXJEoH8st9KgSX2S2x8cw');
const utils = require('./util')

class EventsController extends TelegramBaseController {
  tempoAction(scope) {
    let msg = utils.buildStringTimeRemaning();
    scope.sendMessage(msg, { parse_mode: 'HTML' });
  }
  
  helpAction(scope) {
    let msg = 'Este bot conta o tempo restante para ir para casa. \nUse o comando /tempo para ver o tempo restante.'
    scope.sendMessage(msg);
  }

  get routes() {
    return {
      'tempo': 'tempoAction',
      'help': 'helpAction',
    }
  }
}

chatbot.router
  .when(new TextCommand('/tempo', 'tempo'), new EventsController())
  .when(new TextCommand('/help', 'help'), new EventsController())

