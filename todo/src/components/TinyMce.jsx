import { useRef, forwardRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TodoEditor = forwardRef((props, ref) => {
  const editorRef = useRef(null);

  // Expose getContent and setContent methods through the ref
  if (ref) {
    ref.current = {
      getContent: () => editorRef.current?.getContent() || "",
      setContent: (content) => editorRef.current?.setContent(content || ""),
    };
  }

  return (
    <>
      <Editor
        apiKey="2mtixl4dnrjhudi42z0at5ulm0kzl2x52jhqyt5zn1aq6owm"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 200,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
});

TodoEditor.displayName = "TodoEditor";
export default TodoEditor;
