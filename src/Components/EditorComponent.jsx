import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

const EditorComponent = () => {
  const [editorContent, setEditorContent] = useState("");

  const saveEditorContent = () => {
    const content = window.tinymce.activeEditor.getContent();
    setEditorContent(content);
  };

  const EDITOR_API_KEY = "5614yqw08gq5wr5tjgn1oe3d4j7sh9g0rub3pm4xv05x78xm";

  return (
    <>
      <Editor
        apiKey={EDITOR_API_KEY}
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
          <span className="text-gray-800 "><FormattedMessage id="Status"/></span>
          <div>
            <input type="radio" name="status" />
            <label htmlFor="status" className="text-gray-700 text-sm ml-1">
              <FormattedMessage id="Pending"/>
            </label>
          </div>
          <div>
            <input type="radio" name="status" />
            <label htmlFor="status" className="text-gray-700 text-sm ml-1">
              <FormattedMessage id="Resolved"/>
            </label>
          </div>
        </div>
        <button
          className="px-5 py-1 bg-textActive text-white rounded-md"
          onClick={saveEditorContent}
        >
          <FormattedMessage id="Reply"/>
        </button>
      </div>
    </>
  );
};

export default EditorComponent;
