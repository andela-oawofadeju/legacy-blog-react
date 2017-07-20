class CommentsController < ApplicationController
  before_action: find_comment, only: [:edit, :show, :update, :delete]
  
  def index
  end

  def comments
    @comment = Comments.all
  end

  def new
    @comments = Comments.new
  end

  def create
    @comment = Comment.new
    if @comment.save(comment_params)
      flash[:notice] = "Successfully created comment"
      redirect_to_path @comment
    else
      flash[:alert] = "Unable to create comment"
      render :new
  end

  def edit
  end

  def destroy
    if @comment.destroy(comment_params)
      flash[:notice] = "Successfully deleted comment"
      redirect_to_path
    else
      flash[:alert] = "Unable to delete comment"
  end

  private
  def comment_params
    params.require(:comment).permit(:name, :comment)
  end

  def find_comment
    @comment = Comment.find[params[:id]
  end
end
