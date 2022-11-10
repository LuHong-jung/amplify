/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { useDataStoreBinding } from "@aws-amplify/ui-react/internal";
import { useState } from "react";
import { SortDirection } from "@aws-amplify/datastore";
import userEvent from "@testing-library/user-event";
import { Button, Flex, Text, TextField, SelectField  } from "@aws-amplify/ui-react";


import { DataStore } from "aws-amplify"
import { CardData } from "../models"

export default function comp_test(props) {
  const [text, setText] = useState("");
  const [user_num, setuser_num] = useState("");
  const [user_name, setuser_name] = useState("");
  const [user_dep, setuser_dep] = useState("");
  const [user_status, setuser_status] = useState("");
  const [user_imgurl, setuser_imgurl] = useState("");

  const [CardSelect, setCardSelect] = useState("選択してください");
  const [CardList, setCardList] = useState([]);

  const [get_id, setget_id] = useState("");
  const [get_num, setget_num] = useState("");
  const [get_name, setget_name] = useState("");
  const [get_dep, setget_dep] = useState("");
  const [get_status, setget_status] = useState("");
  const [get_imgurl, setget_imgurl] = useState("");



  var [content,setcontent] = useState(["none"]);
  var [list_data,setlist] = useState([""]);
  const dis_data = []
  const data = []
  var i = 0
  // get datastore data from amplify 
  const get_list_data= () => {
    const CardOption = []
    const data = []
    const list = DataStore.query(CardData).then(values => {
      for (let item of values){
        data.push (
          <li key={item.id} className="list-group-item">
           {item.id}&ensp;&ensp;{item.name}&ensp;&ensp;{item.department}
          </li>)
        CardOption.push (
          <option key={item.id} value={item.id}>{item.name}</option>
          )
        dis_data.push(item.department+" "+item.name)
        
    }
    setlist(data); 
    setCardList(CardOption)
    console.log("data") 
    console.log(data)
  })};

  // Get List display data 
  const getList = () => {  
     get_list_data()
     console.log(text)
    };  

  // amplify datastore Create 
  const CreateData = () =>{
     DataStore.save(
       new CardData({
         Nunber: user_num,
         name: user_name,
         department: user_dep,
         status: user_status,
         image_url: user_imgurl,
       })
     );
  };
  const getData = (id) =>{
    console.log(id)
    console.log("get data ")
    var Card_id = id
    const Card_Data = DataStore.query(CardData,Card_id).then(value => {
      setget_id(value.id)
      setget_num(value.Nunber)
      setget_name(value.name)
      setget_dep(value.department)
      setget_status(value.status)
      setget_imgurl(value.image_url)
      console.log(Card_Data)
    })
  };
  const updateData = () =>{
    console.log("Update ID: "+CardSelect) 
    var Card_id = CardSelect
    const update_Data = DataStore.query(CardData,Card_id)
    console.log("Update dep: "+get_dep) 
    console.log("Update imgurl: "+get_imgurl) 
    console.log("Update statue: "+get_status) 
    DataStore.save(
      CardData.copyOf(update_Data, updated => {
        updated.department = get_dep
        updated.status = get_status
        updated.image_url = get_imgurl
      })
    )
  };
  const deleteData = () =>{
    console.log("delete ID: "+CardSelect) 
    var Card_id = CardSelect
    const delete_Data = DataStore.query(CardData,Card_id)
    console.log("delete datastore") 
    console.log(delete_Data) 
    DataStore.delete(delete_Data);
  };
return (
    <div>
      <h1>GetCardList</h1>
      <Button display="flex" size="small" isDisabled={false} variation="primary" children="Get data" onClick={() => {getList();}}></Button>
      <ol>
        {list_data}
      </ol> 
      <h1>Create Card</h1>
      <Button display="flex" size="small" isDisabled={false} variation="primary" children="Create data" onClick={() => {CreateData();}}></Button>
      <TextField label="番号" value={user_num} size="small" width="100%" onChange={(event) => setuser_num(event.target.value)}/>
      <TextField label="名前" value={user_name} size="small" width="100%" onChange={(event) => setuser_name(event.target.value)}/>
      <TextField label="配属" value={user_dep} size="small" width="100%" onChange={(event) => setuser_dep(event.target.value)}/>
      <SelectField label="状態" value={user_status} size="small" onChange={(event) => setuser_status(event.target.value)}>
            <option value="設定なし">設定なし</option>
            <option value="出勤">出勤</option>
            <option value="不在">不在</option>
            <option value="離席">離席</option>
            <option value="休み">休み</option>
            <option value="会議中">会議中</option>
      </SelectField>
      <TextField label="画像URL" value={user_imgurl} size="small" width="100%" onChange={(event) => setuser_imgurl(event.target.value)}/>
      <p>{text}</p>
      <p>{user_num}</p>
      <p>{user_name}</p>
      <p>{user_dep}</p>
      <p>{user_status}</p>
      <p>{user_imgurl}</p>
      <h1>Get, Update and Delete Card</h1>
      <Button display="flex" size="small" isDisabled={false} variation="primary" children="Update Data" onClick={() => {updateData()}}></Button>
      <Button display="flex" size="small" isDisabled={false} variation="menu" children="Delete Data" onClick={() => {deleteData()}}></Button>
      <SelectField label="名前" value={CardSelect} size="small" onChange={(event) => { setCardSelect(event.target.value); getData(event.target.value);}}>
        {CardList}
      </SelectField>
      <TextField label="番号" value={get_num} size="small" width="100%" />
      <TextField label="名前" value={get_name} size="small" width="100%"/>
      <TextField label="配属" value={get_dep} size="small" width="100%"/>
      <TextField label="状態" value={get_status} size="small" width="100%"/>
      <TextField label="画像URL" value={get_imgurl} size="small" width="100%"/>
    </div>
    );
}

