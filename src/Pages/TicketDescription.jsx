import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import Wrapper from "../Components/Wrapper";
const EditorComponent = () => {
  const [editorContent, setEditorContent] = useState("");

  const saveEditorContent = () => {
    const content = window.tinymce.activeEditor.getContent();
    setEditorContent(content);
  };

  return (
    <Wrapper>
      <div className="lg:w-[60%] mx-auto mt-20 w-[95%]">
        <Editor
          apiKey={import.meta.env.VITE_EDITOR_API_KEY}
          init={{
            menubar: false,
            branding: false,
            plugins:
              "anchor autolink charmap codesample emoticons  link lists  searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode   tableofcontents footnotes mergetags autocorrect typography inlinecss",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link table mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          }}
          initialValue=""
        />
      </div>
      <button
        onClick={saveEditorContent}
        className="bg-gray-300 w-20 px-4 py-1.5 rounded-lg text-center float-right"
      >
        Save
      </button>

      {editorContent && (
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      )}
    </Wrapper>
  );
};

export default EditorComponent;
