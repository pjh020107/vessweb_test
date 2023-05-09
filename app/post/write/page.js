export default function Write(){
    return (
        <div>
            <h1>Write</h1>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글 제목" />
                <input name="content" placeholder="글 내용" />
                <button>버튼</button>
            </form>
        </div>
    )
}