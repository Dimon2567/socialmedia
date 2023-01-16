import React from "react";
import "./Dialogs.css";
import Dialogsitem from "./dialogsitem/Dialogsitem";
import Message from "./message/message.js";

function Dialogs(props) {
  return (
    <div className="dialogs">
      {/* <div className="message">
        <p>Иванов Иван</p>
        <p>Полетели на луну</p>
      </div>
      <div className="message">
        <p>Бил Гейтс</p>
        <p>Ок. Как раз собираюсь</p>
      </div>
      <div className="message">
        <p>Илон Маск</p>
        <p>Меня не забудьте хоть</p>
      </div>
      <input type="text"></input>
      <button>Кнопка</button> */}

      {/* <div className="dialog">
        <Dialogsitem name={dialognames[0].name} id={dialognames[0].id} />
        <Dialogsitem name={dialognames[1].name} id={dialognames[1].id} />
        <Dialogsitem name={dialognames[2].name} id={dialognames[2].id} />
      </div>
      <div className="messages">
        <Message message={messageitem[0].message} id={messageitem[0].id} />
        <Message message={messageitem[1].message} id={messageitem[1].id} />
        <Message message={messageitem[2].message} id={messageitem[2].id} />
      </div> */}
      <div className="dialog">
        {props.dialognames.map((e) => (
          <Dialogsitem name={e.name} id={e.id} />
        ))}
      </div>
      <div className="messages">
        {props.messageitem.map((e) => (
          <Message message={e.message} id={e.id} />
        ))}
      </div>
    </div>
  );
}
export default Dialogs;
//вспомнить гитхаб
