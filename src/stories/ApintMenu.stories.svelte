<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ApintMenu from '../lib/ApintMenu.svelte';
  import ApintTable from '../lib/ApintTable.svelte';
  import ApintInput from '../lib/ApintInput.svelte';
  import ApintSelect from '../lib/ApintSelect.svelte';
  import { fn } from '@storybook/test';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Stories/ApintMenu',
    component: ApintMenu,
    tags: ['autodocs'],
    argTypes: {}
  });

  const rowClick = (index) => {
    alert(index);
  }

  let userData = $state({
    firstName: "Ted",
    lastName: "Tasso"
  })
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Empty page" args={{ supportuser: true, username: "Bonnie Green", userpic: "/profile.jpg",
  activeitem: "Sales Orders",
  menuconfig: {items: [
    {title: "Worldsay.org", url: "#", icon: "/favicon.png"},
    {title: "Overview", url: "#", icon: "/pie.svg"},
    {title: "Sales Orders", url: "#", icon: "/sales.svg", subitems: [
      {title: "Test", url: "#"}
    ]},
    {title: "Analytics", url: "#"},
    {title: "Settings", url: "#", icon: "/settings.svg"}
  ]}}}></Story>

<Story name="Data page">
  <ApintMenu supportuser={true} username="Bonnie Green" userpic="/profile.jpg" activeitem="Overview" menuconfig={{items: [
    {title: "Worldsay.org", url: "#", icon: "/favicon.png"},
    {title: "Overview", url: "#", icon: "/pie.svg"},
    {title: "Sales Orders", url: "#", icon: "/sales.svg", subitems: [
      {title: "Test", url: "#"}
    ]},
    {title: "Analytics", url: "#"},
    {title: "Settings", url: "#", icon: "/settings.svg"}
  ]}}>
    <h1>Sales Orders</h1>
    <div>Your sales orders analytics dashboard.</div>
    <br /><br />
    <ApintTable update={(e) => {alert("Row clicked: " + e.detail.rowIndex)}} headers={["Id", "Created by", "Total", "Status"]} rows={[
      { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}, 
      { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}, 
      { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}, 
      { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}, 
      { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}]}></ApintTable>
  </ApintMenu>
</Story>

<Story name="Detail page">
  <ApintMenu supportuser={true} username="Bonnie Green" userpic="profile.jpg" activeitem="Settings" menuconfig={{items: [
    {title: "Worldsay.org", url: "#", icon: "/favicon.png"},
    {title: "Overview", url: "#", icon: "/pie.svg"},
    {title: "Sales Orders", url: "#", icon: "/sales.svg"},
    {title: "Analytics", url: "#"},
    {title: "Settings", url: "#", icon: "/settings.svg"}
  ]}}>
    <div style="display: flex; flex-flow: row wrap;" class="card_frame">

      <div>Welcome, {userData.firstName}</div>

      <div style="width: 100%;">
        <h3>General information</h3>
      </div>
      <ApintInput style="width: 45%" label="First Name" placeholder="Enter your first name" bind:input={userData.firstName}></ApintInput>
      <ApintInput style="width: 45%" label="Last Name" placeholder="Also your last name"></ApintInput>
      <ApintInput style="width: 45%" type="date" label="Birthday" placeholder="mm/dd/yy"></ApintInput>
      <ApintSelect style="width: 45%" label="Gender" options={["Male", "Female", "Other"]}></ApintSelect>
      <ApintInput style="width: 45%" type="email" label="Email" placeholder="name@company.com"></ApintInput>
      <ApintInput style="width: 45%" type="telephone" label="Phone" placeholder="+49 154343 3232"></ApintInput>
      <div style="width: 100%;">
        <h3>Addresses</h3>
      </div>
      <ApintInput style="width: 70%" label="Address" placeholder="Enter your home address"></ApintInput>
      <ApintInput style="width: 20%" label="Number" placeholder="No."></ApintInput>
    </div>
  </ApintMenu>
</Story>

<style>
  .card_frame {
    max-width: 700px;
    border-color: #eaedf2 !important;
    box-shadow: 0 2px 18px rgba(0, 0, 0, .02) !important;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: .0625rem solid rgba(46, 54, 80, .125);
    border-radius: .5rem;
    padding: 12px 32px;
  }

</style>