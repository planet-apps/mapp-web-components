<svelte:options customElement="mountainview-elegant-buffet" />

<script lang="ts">
  import ElegantHeader from "./ElegantHeader.wc.svelte";
  import ElegantHeroSearch from './ElegantHeroSearch.wc.svelte';
  import ElegantMenuPage from "./ElegantMenuPage.wc.svelte";
  import ElegantFilterCategories from "./ElegantFilterCategories.wc.svelte";
  import ElegantFilterTypes from "./ElegantFilterTypes.wc.svelte";

  let {
    title="",
    logoUrl="",
    rightMenus=[]
  } = $props();
  
  let input = $state("");

  function onInput(input: string) {
    console.log("Input: " + input);
  }

  function onCategorySelect(categoryState: {[key: string]: boolean}) {
    console.log("Category select: " + JSON.stringify(categoryState));
  }

  function onTypeSelect(typeState: {[key: string]: boolean}) {
    console.log("Type select: " + JSON.stringify(typeState));
  }

  let cards = $state([
    {
      topLeftLabel: "2 days ago",
      topRightIcons: [
        {
          title: "Kubernetes",
          url: "https://static-00.iconduck.com/assets.00/kubernetes-icon-1024x993-7mg2wdjb.png"
        }
      ],
      imageUrl: "https://www.gstatic.com/_/sabon/_/9201264702833559584.png",
      title: "A New Frontier of Security: Creating Safe and Secure AI Models",
      authorImageUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      authorName: "Chaim Gartenberg",
      authorUrl: "https://google.com",
      description: "Solve a prehistoric Google mystery and learn the secret origins of our oldest-and largest-Googler: Stan the T.rex.and learn the secret origins of our oldest-and largest-Googler: Stan the T.rex.and learn the secret origins of our oldest-and largest-Googler: Stan the T.rex.",
      link: "https://google.com",
      lowerRightIcons: [
        {
          title: "Kubernetes",
          url: "https://static-00.iconduck.com/assets.00/kubernetes-icon-1024x993-7mg2wdjb.png"
        }
      ]
    },
    {
      topLeftLabel: "2 days ago",
      topRightIcons: [
        {
          title: "Kubernetes",
          url: "https://static-00.iconduck.com/assets.00/kubernetes-icon-1024x993-7mg2wdjb.png"
        }
      ],
      imageUrl: "https://www.gstatic.com/_/sabon/_/9201264702833559584.png",
      title: "A New Frontier of Security: Creating Safe and Secure AI Models",
      authorImageUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      authorName: "Chaim Gartenberg",
      authorUrl: "https://google.com",
      description: "Solve a prehistoric Google mystery and learn the secret origins of our oldest-and largest-Googler: Stan the T.rex.and learn the secret origins of our oldest-and largest-Googler: Stan the T.rex.and learn the secret origins of our oldest-and largest-Googler: Stan the T.rex.",
      link: "https://google.com",
      lowerRightIcons: [
        {
          title: "Kubernetes",
          url: "https://static-00.iconduck.com/assets.00/kubernetes-icon-1024x993-7mg2wdjb.png"
        }
      ]
    }])

</script>

<ElegantHeader {title} {logoUrl} {rightMenus}></ElegantHeader>

<ElegantHeroSearch bind:input={input} {onInput} />

<ElegantFilterCategories categories={[
  {name: "Apigee X", letter: "X"}, 
  {name: "OPDK", letter: "O"},
  {name: "Kubernetes", letter: "K"},
  {name: "Hybrid", letter: "H"}]} {onCategorySelect} />

<ElegantFilterTypes types={[
  {name: "Docs", icon: "🕮"},
  {name: "Tools", icon: "🖰"},
  {name: "Recordings", icon: "🖭"}
]} {onTypeSelect} />

<ElegantMenuPage {cards}/>

<style>

</style>