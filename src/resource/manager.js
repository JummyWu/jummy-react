
class ArticleManager {
    async getListData(key) {
        let response = await fetch('http://localhost:8001/api/post_list?size=5')
        let json = await response.json();
        return json
    }
}
  
  
  let articleManager = new ArticleManager()
  
  
  export { articleManager }