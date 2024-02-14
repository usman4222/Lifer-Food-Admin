import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";

const EditorComponent = () => {
  const [editorContent, setEditorContent] = useState("");

  const saveEditorContent = () => {
    const content = window.tinymce.activeEditor.getContent();
    setEditorContent(content);
  };
  return (
    <>
      <Editor
        apiKey={import.meta.env.VITE_EDITOR_API_KEY}
        init={{
          menubar: false,
          branding: false,
          height: 250,

          plugins:
            "anchor autolink charmap codesample emoticons  link lists  searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode   tableofcontents footnotes mergetags autocorrect typography inlinecss",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link table mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        }}
        initialValue=""
      />
      <div className="flex flex-row justify-between items-center mt-2">
        <div className="flex flex-row justify-center items-center gap-x-3">
          <span className="text-gray-800 ">Status</span>
          <div>
            <input type="radio" name="status" />
            <label htmlFor="status" className="text-gray-700 text-sm ml-1">
              Pending
            </label>
          </div>
          <div>
            <input type="radio" name="status" />
            <label htmlFor="status" className="text-gray-700 text-sm ml-1">
              Resolved
            </label>
          </div>
        </div>
        <button
          className="px-5 py-1 bg-textActive text-white rounded-md"
          onClick={saveEditorContent}
        >
          Reply
        </button>
      </div>
    </>
  );
};

export default EditorComponent;
