import Card from "@/components/Card";
import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file.actions";
import {  convertFileSize, getFileTypesParams } from "@/lib/utils";
import { Models } from "node-appwrite";

const page = async ({searchParams, params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  const searchText = ((await searchParams)?.query as string) || '';
  const sort = ((await searchParams)?.sort as string) || '';
  const types = getFileTypesParams(type) as FileType[];
  const files = await getFiles({ types, searchText, sort })

  let totalSize = 0;

  files.documents.map((file: { size: number; }) => {
      totalSize = totalSize+ file.size
  })
  
  console.log(convertFileSize(totalSize))


  
  return (
    <div className='page-container relative'>
      
      <section className='w-full'>
        <h1 className='h1 capitalize'>{type}</h1>
        <div className='total-size-section'>
          <p className='body-1 font-mono'>
            Total: <span className="font-mono font-bold">{files.documents.length} files |</span> <span className='h5 font-mono'>
              {convertFileSize(totalSize)}
            </span>
          </p>
          <div className="sort-container">
            <p className="body-1 hidden sm:block text-light-100 ">Sort by:</p>
            <Sort/>
          </div>
        </div>
      </section>
      {/* render the files */}
      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">No files</p>
      )}

    </div>
  );
};

export default page;
