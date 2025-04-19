<svelte:options customElement={{
  tag: "gen-editor",
  shadow: "none",
  props: {
    editorContent: {
      reflect: true
    }
  }
}} />

<script lang="ts">
  import editor from "../assets/editor_img_inline.js?raw";
  import { onMount } from "svelte";

  let {editorContent = $bindable("")}: {editorContent: string} = $props();

  let editorObj;
  let imageUploadPath = "";

  onMount(() => {
    const newScript = document.createElement("script");
    newScript.textContent = editor;
    document.head.appendChild(newScript);

    initCkeditor();
  });

  function initCkeditor() {
    // If not using image upload, then remove simpleUpload block in the initialization...
    let contentObj2 = document.getElementById("editorContent");
    
    BalloonBlockEditor.create(contentObj2, {
      placeholder: "Add your content here...",
      // simpleUpload: {
      //   uploadUrl: imageUploadPath,
      //   withCredentials: true,
      //   headers: {
      //     Authorization: "Bearer " + "xyz",
      //   },
      // },
      autosave: {
        save() {
          editorContent = editorObj.getData();
          //if (saveDraft) saveDraft();
          document.dispatchEvent(
            new CustomEvent("EditorContentSave", {
              detail: {
                text: editorContent,
              },
            }),
          );
          return true;
        },
      },
    }).then((newEditor) => {
      editorObj = newEditor;
      //setLoadedStatus(true);
      if (editorContent) {
        console.log("Setting loaded to true in editor create");
        //setLoadedStatus(true);
        editorObj.setData(editorContent);
      }
    });
  }
</script>

<div id="editorContent" style="margin: 0px 34px; min-height: 34px;">
</div>

