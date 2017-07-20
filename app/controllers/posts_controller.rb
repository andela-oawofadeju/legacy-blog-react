class PostsController < ApplicationController
  before_action: find_post, only[:edit, :show, :update, :delete]

  #index acction to render all posts
  def index
  end

  def create
    @post = Post.new
    if @post.save(post_params)
      flash[:notice] = "Successfully created a post"
      redirect_to_post_path(@post)
    else
      flash[:alert] = "Error creating new post"
      render :new
  end
  
  def edit
  end

  def update
    if @post.update_attributes(post_params)
      flash[:notice] = "Successfully updated post"
      redirect_to_post_path(@posts)
    else
      flash[:alert] = "could not update post"
      render :edit
  end

  def delete
    if @post.destroy(post_params)
      flash[:notice] = "Successfully deleted posts"
      redirect_to_post_path
    else
      flash[:alert] = "You are not allowed to deletethis post"
  end
  private
  def post_params
    params.require(:post).permit(:title, :body)
  end

  def find_post
    @post = Post.find(params[:id])
  end
end
